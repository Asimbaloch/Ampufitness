import json
from llama_index.core import Document
from llama_index.core.node_parser import SentenceSplitter
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.core.settings import Settings
from llama_index.vector_stores.mongodb import MongoDBAtlasVectorSearch
from mongodb import mongodb_setup
import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv()

DB_NAME=os.environ['DB_NAME']
COLLECTION_NAME=os.environ['COLLECTION_NAME']
OPEN_AI_KEY=os.environ['OPEN_AI_KEY']

embed_model=OpenAIEmbedding(model="text-embedding-3-small",dimensions=512)
Settings.embed_model=embed_model

def llama_document_create(directory: str):
  df=pd.read_csv('backend/database/dataset.csv')
  documents_json = df.to_json(orient='records')
  document_list=json.loads(documents_json)
  llama_documents=[]
  for document in document_list:
    llama_document = Document(
      text=document["text"],
      text_template="Content: {content}",
    ) 
    
    llama_documents.append(llama_document)
  return llama_documents
    
    
def embedding_vector(embedding_model, llama_documents):
  parser=SentenceSplitter()
  nodes=parser.get_nodes_from_documents(llama_documents)
  for node in nodes:
    node_embedding=embedding_model.get_text_embedding(
      node.get_content()
    )
    node.embedding=node_embedding
    return nodes
  
if __name__=="__main__":
  llama_documents=llama_document_create(directory="dataset.csv")
  nodes=embedding_vector(embedding_model=embed_model, llama_documents=llama_documents)
  mongo_client = mongodb_setup(DB_NAME=DB_NAME, COLLECTION_NAME=COLLECTION_NAME)
  vector_store = MongoDBAtlasVectorSearch(mongo_client, db_name=DB_NAME, collection_name=COLLECTION_NAME, index_name="vector_index")
  vector_store.add(nodes)
  
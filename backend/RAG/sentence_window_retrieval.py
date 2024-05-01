import json
from llama_index.core import Document
from llama_index.core.node_parser import SentenceWindowNodeParser
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.llms.openai import OpenAI
from llama_index.core.settings import Settings
from llama_index.vector_stores.mongodb import MongoDBAtlasVectorSearch
from mongodb_service import mongodb_setup
import pandas as pd
import os
import time
from dotenv import load_dotenv

load_dotenv()

DB_NAME=os.environ['DB_NAME']
COLLECTION_NAME=os.environ['COLLECTION_NAME']

embed_model=HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
llm=OpenAI(model="gpt-3.5-turbo")

Settings.embed_model=embed_model



def llama_document_create(directory: str):
  df=pd.read_csv(directory)
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
        
def build_sentence_index(directory: str, sentence_window_size: int, vectorstore):
  llama_documents=llama_document_create(directory=directory)
  
  parser=SentenceWindowNodeParser.from_defaults(
    window_size=sentence_window_size,
    window_metadata_key="window",
    original_text_metadata_key="original_text",
  )
  
  nodes=parser.get_nodes_from_documents(documents=llama_documents)
  
  start_time = time.time()
  
  for node in nodes:
        node.embedding = Settings.embed_model.get_text_embedding(
            node.get_content(metadata_mode="all")
        )
  
  print("Embedding Completed In {:.2f} sec".format(time.time() - start_time))

  start_time = time.time()
  vector_store.add(nodes)
  
if __name__=="__main__":
  _, mongo_client = mongodb_setup(DB_NAME=DB_NAME, COLLECTION_NAME=COLLECTION_NAME)
  vector_store = MongoDBAtlasVectorSearch(mongo_client, db_name=DB_NAME, collection_name=COLLECTION_NAME, index_name="vector_index", embedding_key="embedding")
  build_sentence_index(directory='./dataset.csv',
                       sentence_window_size=3, 
                       vectorstore=vector_store)
  
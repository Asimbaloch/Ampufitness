import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

def get_mongo_client(mongo_uri):
  """Establish connection to the MongoDB."""
  try:
    client = pymongo.MongoClient(mongo_uri)
    print("Connection to MongoDB successful")
    return client
  except pymongo.errors.ConnectionFailure as e:
    print(f"Connection failed: {e}")
    return None
  
def mongodb_setup(DB_NAME:str, COLLECTION_NAME:str):
  mongo_uri = os.environ['MONGO_URI']
  if not mongo_uri:
    print("MONGO_URI not set in environment variables")
  mongo_client = get_mongo_client(mongo_uri)
  db = mongo_client[DB_NAME]
  collection = db[COLLECTION_NAME]
  return db, mongo_client
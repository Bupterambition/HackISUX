from app import app
from pymongo import MongoClient

#Establish database connection
client = MongoClient()
db = client.database

#Current database has a farmer joe with a location of omaha and an inventory of 3 apples and 2 bananas
#Also there's a apple_t in the inventory database
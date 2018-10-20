from app import app
from pymongo import MongoClient
from bson.json_util import dumps

@app.route('/')
@app.route('/index')
def index():
    return 'Test landing page'

@app.route('/farmers/<location>')
def profile(location):
    client = MongoClient()
    db = client.database
    return dumps(db.farmers.find({"location": location}))
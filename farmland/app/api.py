from app import app, db
from app.models import Farmer, Item
import json

@app.route('/')
@app.route('/index')
def index():
    return 'Test landing page'

@app.route('/farmers/<location>')
def get_farmers_by_loc(location):
    return str(Farmer.query.filter_by(location=location).all())

@app.route('/item/<item>')
def get_item(item):
    return str(Item.query.filter_by(name=item).all())
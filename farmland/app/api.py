from app import app, db
from app.models import Farmer, Item
import json
from flask import redirect, url_for, render_template

@app.route('/<path>')
@app.route('/')
def index(path = ''):
    return render_template('index.html')

@app.route('/farmers/<location>')
def get_farmers_by_loc(location):
    return str(Farmer.query.filter_by(location=location).all())

@app.route('/item/<item>')
def get_item(item):
    return str(Item.query.filter_by(name=item).all())
from app import app, db
from app.models import Farmer, Item
import json
from flask import redirect, url_for, render_template, send_from_directory

@app.route('/<path>')
@app.route('/')
def index(path = ''):
    return render_template('index.html')

@app.route('/farmers/<location>')
def get_farmers_by_loc(location):
    return str(Farmer.query.filter_by(location=location).all())

@app.route('/farmers/<farmer>/items')
def get_farmer_items(farmer):
    f = Farmer.query.filter_by(name=farmer).first()
    return str(Item.query.filter_by(farmer_id=f.id).all())

@app.route('/farmers/<farmer>/update/<item>/<amount>')
def incr_item(farmer, item, amount):
    farmer = Farmer.query.filter_by(name=farmer).first()
    i = Item.query.filter_by(name=item, farmer_id=farmer.id).first()
    i.quantity = i.quantity + int(amount)
    db.session.commit()
    return json.dumps({"success": True})

@app.route('/item/add/<farmer>/<item>/<amount>')
def add_item(farmer, item, amount):
    farmer_n = Farmer.query.filter_by(name=farmer).first()
    i = Item(name=item, quantity=amount)
    farmer_n.items.append(i)
    db.session.commit()
    return json.dumps({"success": True})

@app.route('/item/<item>')
def get_item(item):
    return str(Item.query.filter_by(name=item).all())

@app.route('/item/all')
def get_all_items():
    return str(Item.query.all())

@app.route('/sale/<farmer>/<item>/<amount>')
def sell_item(farmer, item, amount):
    farmer = Farmer.query.filter_by(name=farmer).first()
    i = Item.query.filter_by(name=item, farmer_id=farmer.id).first()
    i.quantity = i.quantity - int(amount)
    db.session.commit()
    return json.dumps({"success": True})

@app.route('/images/<image>')
def get_image(image):
    return send_from_directory('images', image)
from app import db
import json

class Farmer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    location = db.Column(db.String(64), index=True)
    items = db.relationship('Item', backref='farmer', lazy=True)

    def __repr__(self):
        return json.dumps(self.get_dict())

    def get_dict(self):

        names = list(map(lambda item: item.name, self.items))

        ret = {
            "name": self.name,
            "location": self.location,
            "items": names
        }
        return ret

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    quantity = db.Column(db.Integer)
    farmer_id = db.Column(db.Integer, db.ForeignKey('farmer.id'), nullable=False)

    def __repr__(self):
        return json.dumps(self.get_dict())
    
    def get_dict(self):
        ret = {
            "name": self.name,
            "quantity": self.quantity,
            "farmer": Farmer.query.filter_by(id=self.farmer_id).first().name
        }
        return ret
from app import app, db, models

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Farmer': models.Farmer, 'Item': models.Item}
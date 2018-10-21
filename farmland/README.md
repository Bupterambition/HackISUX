# Setup

## Pip stuff

- `pip install flask python-dotenv flask-sqlalchemy flask-migrate`
- `export FLASK_APP=web.py` for UNIX and `set FLASK_APP=web.py` for Windows

## React stuff

- build the react code in `farm-market` with `npm run build` (might have to do a `npm install` first)
- move the files from the build folder into the templates folder in  `farmland/app/templates`
- move the static directory to the outside of the templates folder
- move the `js`, `css`, and `media` folders into the `static` directory
- run `flask run`
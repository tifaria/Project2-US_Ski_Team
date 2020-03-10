from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData
from flask import Flask, jsonify


pg_connection_string = "postgresql://postgres:quicknc14@localhost:5432/us_ski_team_db"

engine = create_engine(pg_connection_string)

session = Session(engine)

m = MetaData()
Base = automap_base(bind=engine, metadata=m)
Base.prepare(engine, reflect=True)
print(Base.classes.keys())
ski_team = Base.classes.ski_team
mountain_elevations = Base.classes.mountain_elevations

app = Flask(__name__)

@app.route("/ski-team")
def ski():
    results = session.query(ski_team.name, ski_team.team, ski_team.city, ski_team.state, ski_team.lat, ski_team.long).all()
    return jsonify(results)

@app.route("/mountains")
def mountain():
    results = session.query(mountain_elevations.state, mountain_elevations.mountain_name, mountain_elevations.elevation, mountain_elevations.latitude, mountain_elevations.longitude).all()
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
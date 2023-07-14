from mlchain.base import ServeModel
from app_model_ver2 import Model
from mlchain.server import FlaskServer

model = Model()
serve_model = ServeModel(model)

FlaskServer(serve_model).run(port=4000, threads=12)
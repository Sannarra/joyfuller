from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg

app = Flask(__name__)

CORS(app)


@app.route("/")
def home():
    return "Home"


@app.route("/users/<user_id>")
def get_user(user_id):
    user_data = {"user_id": user_id, "name": "John Doe", "email": "test@gmail.com"}

    return jsonify(user_data), 200


@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    print(data)
    return jsonify(data), 201


if __name__ == "__main__":
    app.run(debug=True)

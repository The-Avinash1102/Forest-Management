'''
tell all the parameters and endpoints u are going to have
///parameters (replace all spaces with '_')



Animal Registration and Plant Registration:
1.)image
2.)breed
3.)sex
4.)date of registering

Visitors:
1.)image
2.)id proof
3.)name
4.)age
4.)date of visitation
5.)expiration



/// endpoints
Animals Entry(/Animals/Entry)
Animals Registration(/Animals/Register)

Plants Entry(/Plant/Entry)
Plants Registration(/Plant/Register)

Chatbot (/Chatbot)

Visitors Entry(/Visitors/Entry)
Visitors Registration(/Visitors/Register)


'''

from flask import Flask, jsonify, request
from flask_cors import CORS

from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)


client = MongoClient(os.environ['MONGO_URI'])
db = client["Cluster0"]

Users = db["Visitors"]
Animals = db["Animals"]
Plants = db["Plants"]

# collectionUsers = db["users"]
# Reports = db["reports"]
# complaints = db["complaints1"]
# WorkerCollection = db["workers"]

app.config['MONGO_URI'] = os.environ['MONGO_URI']


'''
    endpoints:
'''
##POST endpoints


@app.route('/Visitors/Register', methods=['POST'])
def VisitorsRegister():
    try:
        # image = request.json.get('image')
        # id_proof = request.json.get('id_proof')
        name = request.json.get('name')
        age = request.json.get('age')
        date_of_visitation = request.json.get('date_of_visitation')
        expiration = request.json.get('expiration')

        Users.insert_one(
            {
                # "image": image,
                # "id_proof": id_proof,
                "name": name,
                "age": age,
                "date_of_visitation": date_of_visitation,
                "expiration": expiration
            }
        )
        return jsonify({"response": "request sent"})
    except Exception as e:
        print(e)
        return jsonify({"response": "error"})


@app.route('/Animals/Register', methods=['POST'])
def AnimalsRegister():
    try:
        id = request.json.get("id")
        name = request.json.get("name")
        species = request.json.get("species")
        age = request.json.get("age")
        location = request.json.get("location")
        # image = request.json.get("image")
        rarity = request.json.get("rarity")

        Animals.insert_one({
            "id": id,
            "name": name,
            "species": species,
            "age": age,
            "location": location,
            # "image": image,
            "rarity": rarity
        })
        return jsonify({"response": "request successful"})
    except Exception as e:
        print(e)
        return jsonify("an error has occured")


@app.route('/Plant/Register', methods=['POST'])
def PlantsRegister():
    try:
        # id = request.json.get("id")
        name = request.json.get("name")
        species = request.json.get("species")
        age = request.json.get("age")
        location = request.json.get("location")
        # image = request.json.get("image")
        # rarity = request.json.get("rarity")

        Plants.insert_one({
            # "id": id,
            "name": name,
            "species": species,
            "age": age,
            "location": location,
            # "image": image,
            # "rarity": rarity
        })
        return jsonify("works")
    except Exception as e:
        print(e)
        return jsonify("an error has occured")


##GET endpoints


@app.route('/Animals/filter', methods=['GET'])
def AnimalsFilter():
    try:
        typer = request.json.get("type")
        values = request.json.get("value")

        collection = Animals.find({typer: values})
        # data = []

        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                "id": doc["id"],
                "name": doc["name"],
                "species": doc["species"],
                "age": doc['age'],
                "location": doc['location'],
                "image": doc["image"],
                "rarity": doc["rarity"],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})

    except Exception as e:
        print(e)
        return jsonify("an error has occured")


@app.route('/Plant/filter', methods=['GET'])
def PlantFilter():
    try:
        typer = request.json.get("type")
        values = request.json.get("value")

        collection = Plants.find({typer: values})
        # data = []

        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                "id": doc["id"],
                "name": doc["name"],
                "species": doc["species"],
                "age": doc['age'],
                "location": doc['location'],
                "image": doc["image"],
                "rarity": doc["rarity"],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})

    except Exception as e:
        print(e)
        return jsonify("an error has occured")


@app.route('/Visitors/filter', methods=['GET'])
def UserFilter():
    try:
        typer = request.json.get("type")
        values = request.json.get("value")

        collection = Users.find({typer: values})
        # data = []

        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                "image": doc['image'],
                "id_proof": doc['id_proof'],
                "name": doc['name'],
                "age": doc['age'],
                "date_of_visitation": doc["date_of_visitation"],
                "expiration": doc['expiration'],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})

    except Exception as e:
        print(e)
        return jsonify("an error has occured")


@app.route('/Animals/Entry', methods=['GET'])
def AnimalsEntry():
    try:
        collection = Animals.find()
        # data = []

        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                # "id": doc["id"],
                "name": doc["name"],
                "species": doc["species"],
                "age": doc['age'],
                "location": doc['location'],
                # "image": doc["image"],
                # "rarity": doc["rarity"],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})
        # return jsonify({'reponse': 'works'})
    except Exception as e:
        print(e)
        return jsonify({'response': 'error'})


@app.route('/Plant/Entry', methods=['GET'])
def PlantEntry():
    try:
        collection = Plants.find()
        # data = []
        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                # "id": doc["id"],
                "name": doc["name"],
                "species": doc["species"],
                "age": doc['age'],
                "location": doc['location'],
                # "image": doc["image"],
                # "rarity": doc["rarity"],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})
    except Exception as e:
        print(e)
        return jsonify({'response': 'error'})


@app.route('/Chatbot', methods=['GET'])
def Chatbot():
    return jsonify({'response': 'works'})


@app.route('/Visitors/Entry', methods=['GET'])
def VisitorsEntry():
    try:
        collection = Users.find()
        # data = []hhhh

        formatted_values = []

        for doc in collection:  # Iterate through documents in the cursor
            formatted_values.append({
                # "image": doc['image'],
                # "id_proof": doc['id_proof'],
                "name": doc['name'],
                "age": doc['age'],
                "date_of_visitation": doc["date_of_visitation"],
                "expiration": doc['expiration'],
                "_id": str(doc['_id'])
            })
        return jsonify({'response': formatted_values})
        # return jsonify({'reponse': 'works'})
    except Exception as e:
        print(e)
        return jsonify({'response': 'error'})

@app.route('/ClearAllData',methods=['POST'])
def ClearAllUsers():
  Plants.delete_many({})

if __name__ == "__main__":
    app.run('0.0.0.0', debug=True)

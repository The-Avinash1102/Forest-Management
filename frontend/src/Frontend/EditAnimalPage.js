import React from "react";
import { useState } from "react";
// import Top from "./Top";
import HandleNav from "./Navigation";

const AddAnimal = () => {
    const [animalList, setAnimalList] = useState([
        { id: 1, name: "Lion", species: "Panthera leo"},
        { id: 1, name: "Tiger", species: "Panthera tigris"},
        { id: 1, name: "Elephant", species: "Loxodonta africana"}
    ]);

    const [newAnimal,setNewAnimal] = useState({ name: "", species: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnimalList([...animalList, {id: animalList.length + 1, ...newAnimal}]);
        setNewAnimal({ name: "", species: "" });
    };

    const handleInputChange = (e) => {
        setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value});
    };

    return(
        
        <div className="edit-animal-main" id="edit-animal">
                <HandleNav />
                <div className="edit-animal">
            <div className="animal-list">
                <h2>Animal List</h2>
                <ul>
                    {animalList.map((animal) => (
                        <li key={animal.id}>
                            {animal.name}  ({animal.species})
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input autoComplete="off"
                type="text"
                name="name"
                value={newAnimal.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Species:
              <input autoComplete="off"
                type="text"
                name="species"
                value={newAnimal.species}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Add Animal</button>
          </form>
        </div>
        </div>
      </div>
    );

    

};

export default AddAnimal;
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
               <div className="top-container">
        <div className="logo">
          <h1>Greenify</h1>
        </div>
        <HandleNav />
         </div>
                <div className="edit-animal">
            <div className="add-animal-list">
                <h1>Animal List</h1>
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
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={newAnimal.age}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={newAnimal.location}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Image:
              <input
                type="file"
                name="image"
                accept=".jpg, .jpeg"
                onChange={handleInputChange}
                required
                // style={{alignContent:"center"}}
              />
              </label>
            <button type="submit">Add Animal</button>
          </form>

          <ul>
                    {animalList.map((animal) => (
                        <li key={animal.id}>
                            {animal.name}  ({animal.species})
                        </li>
                    ))}
                </ul>
        </div>
        </div>
      </div>
    );

    

};

export default AddAnimal;
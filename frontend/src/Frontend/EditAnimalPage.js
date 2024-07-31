import React from "react";
import { useState } from "react";
import Top from "./Top";
// import HandleNav from "./Navigation";
import { SetAnimalData } from "./requests/requests";

const AddAnimal = () => {
    const [animalList, setAnimalList] = useState(null);

    const [newAnimal,setNewAnimal] = useState({ name: "", species: ""});

    const ONSUBMIT =()=>{
      SetAnimalData(newAnimal);
      console.log(animalList);
      setNewAnimal({ name: "", species: "", age: "", location: ""});
    }

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
               <Top />
                <div className="edit-animal">
            <div className="add-animal-list">
                <h1>Animal List</h1>
                <form onSubmit={ONSUBMIT}>
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
            {/* <label>
              Image:
              <input
                type="file"
                name="image"
                accept=".jpg, .jpeg"
                onChange={handleInputChange}
                required
                // style={{alignContent:"center"}}
              />
              </label> */}
            <button type="submit">Add Animal</button>
          </form>

          {/* <ul>
                    {animalList.map((animal) => (
                        <li key={animal.id}>
                            {animal.name}  ({animal.species})
                        </li>
                    ))}
                </ul> */}
        </div>
        </div>
      </div>
    );

    

};

export default AddAnimal;
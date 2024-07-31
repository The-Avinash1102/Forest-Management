import React, { useState } from "react";
// import HandleNav from "./Navigation";
import Top from "./Top";
import { SetPlantData } from "./requests/requests";
const AddTree = () => {
  const [treeList, setTreeList] = useState(
  null)
  // [
  //   { id: 1, name: "Oak Tree", species: "Quercus robur", age: 10, location: "Park", image: "" },
  //   { id: 2, name: "Pine Tree", species: "Pinus sylvestris", age: 20, location: "Garden", image: "" },
  //   { id: 3, name: "Maple Tree", species: "Acer saccharum", age: 30, location: "Forest", image: "" },
  // ]);

  const [newTree, setNewTree] = useState({ name: "", species: "", age: "", location: "", image: null });
  const ONSUBMIT =()=>{
    SetPlantData(newTree);
    setNewTree({ name: "", species: "", age: "", location: "", image: null });
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTreeList([...treeList, { id: treeList.length + 1, ...newTree }]);
  //   setNewTree({ name: "", species: "", age: "", location: "", image: null });
  // };

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setNewTree({ ...newTree, [e.target.name]: e.target.files[0] });
    } else {
      setNewTree({ ...newTree, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="edit-forest-main" id="edit-forest">
      <Top />
      <div className="edit-forest">
        <div className="add-tree-list">
          <h1>Name your Contribution</h1>
          <form onSubmit={ONSUBMIT}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newTree.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Species:
              <input
                type="text"
                name="species"
                value={newTree.species}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={newTree.age}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={newTree.location}
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
              />
            </label> */}
            <button type="submit">Add Tree</button>
          </form>
{/* 
          <ul>
            {treeList.map((tree) => (
              <li key={tree.id}>
                {tree.name} ({tree.species}) - Age: {tree.age}, Location: {tree.location}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default AddTree;
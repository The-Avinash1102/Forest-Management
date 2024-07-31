import React, { useState, useEffect } from "react";
// import HandleNav from "./Navigation";
import Top from "./Top";
import { SetUserData } from "./requests/requests";

const VisitorsPage = () => {
  const [visitors, setVisitors] = useState([]); // initialize an empty array to store visitor data
  const [newVisitor, setNewVisitor] = useState({ name: "", email: "", phone: "" }); // initialize an empty object to store new visitor data

  const ONSUBMIT=()=>{
    SetUserData(newVisitor);
    setNewVisitor({ name: "", email: "", phone: "" });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVisitor({...newVisitor, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add new visitor to the list
    setVisitors([...visitors, newVisitor]);
    // reset the new visitor form
    setNewVisitor({ name: "", email: "", phone: "" });
  };

  return (
      <div className="visitor-page-main" id="visitor-page">

<Top />
            <div className="visitor-page">
          
          <div className="new-visitor-form">
            <center>
              <h2>Hello Adventurer</h2>
              <p>Each step brings you closer to discovering hidden treasures</p>
            </center>
            
            <form onSubmit={ONSUBMIT}>
              {/* <label>
                Name:
                <input type="text" name="name" value={newVisitor.name} onChange={handleInputChange} autoComplete="no" required />
              </label>
              
              <label>
                Email:
                <input type="email" name="email" value={newVisitor.email} onChange={handleInputChange} autoComplete="no" required />
              </label>
              
              <label>
                Phone:
                <input type="tel" name="phone" pattern="[0-9]{10}" value={newVisitor.phone} onChange={handleInputChange} autoComplete="no" />
              </label>
              
              <button type="submit">Add Visitor</button> */}
              <label>
                Name:
                <input type="text" name="name" value={newVisitor.name} onChange={handleInputChange} autoComplete="no" required />
              </label>
              <label>
                Age:
                <input type="number" name="age" value={newVisitor.age} onChange={handleInputChange} autoComplete="no" required />
              </label>
              <label>
                Date of Visit:
                <input type="text" name="date" placeholder="yyyy/mm/dd" value={newVisitor.date_of_visit} onChange={handleInputChange} autoComplete="off" required />
              </label>
              <label>
                Duration:
                <input type="text" name="date" placeholder="yyyy/mm/dd" value={newVisitor.expiration} onChange={handleInputChange} autoComplete="off" required />
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
              </label>

              <label>
                Id-Proof:
                <input
                type="file"
                name="idProof"
                accept=".jpg, .jpeg"
                onChange={handleInputChange}
                required
                />
              </label> */}
              <button type="submit">Add Visitor</button>
            </form>
          </div>
          </div>
        
      </div>
  );
};

export default VisitorsPage;
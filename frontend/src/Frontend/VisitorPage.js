import React, { useState, useEffect } from "react";
import HandleNav from "./Navigation";


const VisitorsPage = () => {
  const [visitors, setVisitors] = useState([]); // initialize an empty array to store visitor data
  const [newVisitor, setNewVisitor] = useState({ name: "", email: "", phone: "" }); // initialize an empty object to store new visitor data

  useEffect(() => {
    // fetch visitor data from your API or database
    fetch('/api/visitors') // replace with your API endpoint
    .then(response => response.json())
    .then(data => setVisitors(data));
  }, []);

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

            <HandleNav />
            <div className="visitor-page">
          
          <div className="new-visitor-form">
            <center>
              <h2>Hello Adventurer</h2>
              <p>Each step brings you closer to discovering hidden treasures</p>
            </center>
            
            <form onSubmit={handleSubmit}>
              <label>
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
              
              <button type="submit">Add Visitor</button>
            </form>

            <div className="visitor-list">
            <center><h2>VISITORS LIST</h2></center>
            
            <ul>
              {visitors.map((visitor, index) => (
                <li key={index}>
                  <p>Name: {visitor.name}</p>
                  <p>Email: {visitor.email}</p>
                  <p>Phone: {visitor.phone}</p>
                </li>
              ))}
            </ul>
          </div>
          </div>
          </div>
        
      </div>
  );
};

export default VisitorsPage;
import React from "react";
// import HandleNav from "./Navigation";
import Top from "./Top";
import './style.css';
import Tilt from 'react-vanilla-tilt';
import { useState,useEffect } from "react";
// import { }
import { fetchUserData } from "./requests/requests";




const ShowVisitors = () => {
    const [visitor,setVisitor]= useState(null);
    useEffect(()=>{
      fetchUserData(setVisitor);
      console.log(visitor);
    },[])
    return(
        <div className="showVisitor-page" id="showVisitor-page">
      
      <Top />
        
        <div className="showVisitor-list"><center>
          <h1>Who is visiting us</h1></center>
          <div className="showVisitor-cards">
          {visitor?visitor.map((visitor) => (
  <Tilt key={visitor.id} className="showVisitor-card" options={{ max: 25, speed: 5000, glare:true, 'max-glare': 0.5 }}>
    {/* <img src={tree.image} alt={tree.name} /> */}
    <h2>visitor name:{visitor.name}</h2>
    {/* <p>: {visitor.species}</p> */}
    {/* <p>Age: {visitor.age} years</p>
    <p>Location: {visitor.location}</p> */}
    <p>Age:{visitor.age}</p>
    <p>Date of visit:{visitor.date_of_visitation}</p>
    <p>Duration:{visitor.expiration}</p>
  </Tilt>
)):null}
          </div>
        </div>
      </div>
    );
};

export default ShowVisitors;
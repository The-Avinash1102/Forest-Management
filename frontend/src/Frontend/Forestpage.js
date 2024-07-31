import React from 'react';
import Tilt from 'react-vanilla-tilt';
import './style.css'; 
// import HandleNav from "./Navigation";
import Top from './Top';
import { fetchPlantData } from './requests/requests';
import { useState,useEffect } from 'react';

// const trees = [
//   {
//     id: 1,
//     name: 'Oak Tree',
//     species: 'Quercus robur',
//     age: 100,
//     location: 'North Forest',
//     image: 'forest-1.jpg'
//   },
//   {
//     id: 2,
//     name: 'Pine Tree',
//     species: 'Pinus sylvestris',
//     age: 50,
//     location: 'South Forest',
//     image: 'pine-tree.jpg'
//   },
//   {
//     id: 3,
//     name: 'Maple Tree',
//     species: 'Acer saccharum',
//     age: 200,
//     location: 'East Forest',
//     image: 'maple-tree.jpg'
//   },
//   {
//     id: 4,
//     name: 'Coconut Tree',
//     species: 'Cocos nucifera',
//     age: 40,
//     location: 'South Forest',
//     image: 'coconut-tree.jpg'
//   }
// ];

const ForestPage = () => {
  const [trees,setTrees]= useState(null);
  useEffect(()=>{
    fetchPlantData(setTrees);
    console.log(trees);
  },[])
  return (
    <>
      <div className="forest-page" id="forest-page">
      
      <Top />
        
        <div className="tree-list"><center>
          <h1>Trees in the Forest</h1></center>
          <div className="tree-cards">
          {trees?trees.map((tree) => (
  <Tilt key={tree.id} className="tree-card" options={{ max: 25, speed: 5000, glare:true, 'max-glare': 0.5 }}>
    {/* <img src={tree.image} alt={tree.name} /> */}
    <h2>{tree.name}</h2>
    <p>Species: {tree.species}</p>
    <p>Age: {tree.age} years</p>
    <p>Location: {tree.location}</p>
  </Tilt>
)):null}
          </div>
        </div>
      </div>
      </>
  );
};

export default ForestPage;
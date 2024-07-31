import React, { useEffect, useState } from 'react';
import Tilt from 'react-vanilla-tilt';
import './style.css';
// import HandleNav from "./Navigation";
import Top from './Top';
import { fetchAnimalData } from './requests/requests';
// const animals = [
//   {
//     id: 1,
//     name: 'Lion',
//     species: 'Panthera leo',
//     age: 15,
//     location: 'Savannah',
//     image: '/images/forest-1.jpg' 
//   },
//   {
//     id: 2,
//     name: 'Tiger',
//     species: 'Panthera tigris',
//     age: 18,
//     location: 'Jungle',
//     image: '/images/forest-1.jpg'
//   },
//   {
//     id: 3,
//     name: 'Elephant',
//     species: 'Loxodonta africana',
//     age: 21,
//     location: 'Savannah',
//     image: '/images/forest-1.jpg'
//   },
//   {
//     id: 4,
//     name: 'Giraffe',
//     species: 'Giraffa camelopardalis',
//     age: 12,
//     location: 'Savannah',
//     image: '/images/forest-1.jpg'
//   }
// ];


const AnimalPage = () => {
  // const [animals,setAnimals]=useState(null);
  // useEffect(()=>{
  //   fetchAnimalData(setAnimals)
  // },[])

    const [animals,setAnimals]=useState(null);
    useEffect(()=>{
      fetchAnimalData(setAnimals)
    },[])
  
  return (
    
      <div className="animal-page" id="animal-page">
        <Top />
        
        <div className="animals-list"><center>
          <h1>Animals in the Forest</h1></center>
          <div className="animals-cards">
          {animals && animals.map((animal) => (
            <Tilt key={animal.id} className="animals-card" options={{ max: 25, speed: 5000, glare:true, 'ax-glare': 0.5 }}>
            {/* <img src={animal.image} alt={animal.name} /> */}
              <h2>{animal.name}</h2>
              <p>Species: {animal.species}</p>
              <p>Age: {animal.age} years</p>
              <p>Location: {animal.location}</p>
              {/* <p>Rarity: {animal.rarity}</p> */}
            </Tilt>
          ))}
          </div>
        </div>
      </div>
    
  );
};

export default AnimalPage;
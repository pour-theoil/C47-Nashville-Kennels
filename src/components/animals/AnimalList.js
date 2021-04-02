import React, { useState, useEffect } from 'react';
import { AnimalCard } from "./AnimalCard"
import { getAllAnimals} from '../../modules/AnimalManager';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([])


    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
          // We'll do something more interesting with this data soon.
          setAnimals(animalsFromAPI)
        });
      };
    
      useEffect(() => {
        getAnimals();
      }, []); 
    
    return (
        <div className="container-cards">
         {animals.map(animal => <AnimalCard animal={animal} key={animal.id}/>)}
        </div>
    );
};
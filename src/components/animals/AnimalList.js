import React, { useState, useEffect } from 'react';
import { AnimalCard } from "./AnimalCard"
import { getAllAnimals, deleteSetAnimal } from '../../modules/AnimalManager';
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
    const [animals, setAnimals] = useState([])

    const history = useHistory();
    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
          // We'll do something more interesting with this data soon.
          setAnimals(animalsFromAPI)
        });
    };

    const deleteAnimal = id => {
        deleteSetAnimal(id)
        .then(() => getAllAnimals().then(setAnimals));
    };
      
    
      useEffect(() => {
        getAnimals();
      }, []); 
      
    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { history.push("/animals/create") }}>
            Admit Animal
          </button>
        </section>
        <div className="container-cards">
         {animals.map(animal => <AnimalCard animal={animal} 
                                            key={animal.id} 
                                            deleteAnimal={deleteAnimal}/>)}
        </div>
      </>
    );
};
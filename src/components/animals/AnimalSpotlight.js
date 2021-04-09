import React, { useState, useEffect } from 'react'
import { getAnimalById } from '../../modules/AnimalManager'
import './AnimalSpotlight.css'
let i = 0
export const AnimalSpotlight = ({animalId}) => {
    const [animal, setAnimal] = useState({});

    console.log("called for", animalId, i)
    useEffect(() => {
        getAnimalById(animalId).then(animal => {
            setAnimal(animal)
        });
    }, [animalId]);
    i++
    return (
        <div className="animal-spotlight">
            <img src={animal.img} alt="My Dog"/>
            <div>
                <h3>{animal.name}</h3>
                <p>{animal.breed}</p>
            </div>
        </div>
    )
}
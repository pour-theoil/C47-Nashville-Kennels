import React, { useEffect, useState } from "react";
import { PropsAndState } from './PropsAndState'
import { getRandomId } from '../modules/AnimalManager'
import { AnimalSpotlight } from './animals/AnimalSpotlight'


export const Home = () => {
    const [spotlightId, setSpotlightId] =useState(0);
    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId)
    }
    
    useEffect(()=>{
        refreshSpotlightAnimal();
    }, [])

    return(
        <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
        {
          spotlightId && <AnimalSpotlight animalId={spotlightId} />
        }
    </>
    )
}

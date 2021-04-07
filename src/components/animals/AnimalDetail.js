import React, { useState, useEffect } from "react"
import { getAnimalById } from "../../modules/AnimalManager"
import "./AnimalDetails.css"
import { useParams, useHistory } from "react-router-dom"
import { deleteSetAnimal } from "../../modules/AnimalManager"

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name:"", breed:"", location: {}, customer: {}});
    const [isLoading, setIsLoading] = useState(true)

    const {animalId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteSetAnimal(animalId).then(() =>
            history.push("/animals")
        )
    }

    useEffect(() => {
        console.log("useEffect", animalId)
        getAnimalById(animalId)
        .then(animal => {
            setAnimal({
                name: animal.name,
                breed: animal.breed,
                location: animal.location,
                customer: animal.customer
            });
            setIsLoading(false)
        });
    },[animalId])
    
    return (
        <section className="animal">
          <h3 className="animal__name">{animal.name}</h3>
          <div className="animal__breed">{animal.breed}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="animal__location">Location: {animal.location?.name}</div>
          <div className="animal__owner">Customer: {animal.customer?.name}</div>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
             Discharge
            </button>
        </section>
      );

}
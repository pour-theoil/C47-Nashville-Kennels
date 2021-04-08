import React, { useState, useEffect } from "react"
import { useParams, useHistory} from "react-router-dom"
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import {getAllLocations} from "../../modules/LocationManager"
import {getAllCustomers } from "../../modules/CustomerManager"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", img: ""});
  const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const history = useHistory();

  const getLocations = () => { 
    return getAllLocations().then(locationsFromAPI => {
        setLocations(locationsFromAPI)
    })
  } 
  const getCustomers = () => {
    return getAllCustomers().then(customersFromApi => {
      setCustomers(customersFromApi)
  })
  }

  
  useEffect(() => {
		//load location data and setState
        getLocations(setLocations)
	}, []);

    useEffect(() => {
		//load location data and setState
       getCustomers(setCustomers)
	}, []);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };


  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      img: animal.img,
      locationId: animal.locationId,
      customerId: animal.customerId
    };
    
  updateAnimal(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="img"
              value={animal.img}
            />
            <label htmlFor="img">Image</label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
						
						  {locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
				  	</select>
            <label htmlFor="locationId">Location</label>
            <select value={animal.customerId} name="customerId" id="customerId" onChange={handleFieldChange} className="form-control" >
				
						  {customers.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
				  	</select>
            <label htmlFor="customerId">Customer</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
import React, {useState, useEffect} from "react"
import { LocationCard } from "./LocationCard"
import { getAllLocations , deleteLocation } from "../../modules/LocationManager"
 
export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const removeLocation = id => {
        deleteLocation(id)
        .then(() => getAllLocations().then(setLocations))
    }
    useEffect (() => {
        getLocations();
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard location={location} removeLocation={removeLocation} key={location.id}/>)}
        </div>
    )
}
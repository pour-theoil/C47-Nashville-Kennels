import React from "react"

export const LocationCard = ({location, removeLocation}) => (
    <div className="card">
    <div className="card-content">
        <picture>

        </picture>
         <h3>Name: <span className="card-location-name">
             {location.name}
             </span></h3>
         <p>Location: {location.name}</p>
         <button type="button" onClick={() => removeLocation(location.id)}>Close Location</button>
    </div>
</div>
)
import React from "react"

export const OwnerCard = ({ owner, deleteOwner}) => (
   <div className="card">
       <div className="card-content">
           <picture>

           </picture>
            <h3>Name: <span className="card-owner-name">
                {owner.name}
                </span></h3>
            <p>Location: {owner.location.name}</p>
            <button type="button" onClick={() => deleteOwner(owner.id)}>Remove</button>
       </div>
   </div>
)
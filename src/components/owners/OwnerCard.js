import React from "react"

export const OwnerCard = ({owner}) => (
   <div className="card">
       <div className="card-content">
           <picture>

           </picture>
            <h3>Name: <span className="card-owner-name">
                {owner.name}
                </span></h3>
            <p>Location: {owner.location.name}</p>
       </div>
   </div>
)
import React from "react"

export const OwnerCard = ({owner}) => (
    <section className="owner">
        <h3 className="owner__name">{owner.name}</h3>
        <div className="owner__locationId">{owner.locationId}</div>
    </section>
)
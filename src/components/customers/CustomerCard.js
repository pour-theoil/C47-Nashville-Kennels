import React from "react"


export const CustomerCard = ({customer, deletecustomer}) => (
    <div className="card">
        <div className="card-content">
            <picture>

            </picture>
            <h3>Name: <span className="card-customer-name">
                {customer.name}
                </span></h3>
            <p>address: {customer.address}</p>
            <button type="button" onClick={() => deletecustomer(customer.id)}>Remove</button>
        </div>
    </div>
)
import React from "react"
import { Link } from "react-router-dom"


export const CustomerCard = ({customer, deletecustomer}) => (
    <div className="card">
        <div className="card-content">
            <picture>

            </picture>
            <h3>Name: <span className="card-customer-name">
                {customer.name}
                </span></h3>
            <p>address: {customer.address}</p>
            <Link to={`/customers/${customer.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => deletecustomer(customer.id)}>Remove</button>
        </div>
    </div>
)
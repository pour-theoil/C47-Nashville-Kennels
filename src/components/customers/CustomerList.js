import React, { useState, useEffect } from "react";
import { CustomerCard } from "./CustomerCard"
import { getAllCustomers } from "../../modules/CustomerManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        return getAllCustomers().then(customersFromApi => {
            setCustomers(customersFromApi)
        })
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <div className="container-card">
            {customers.map(customer => <CustomerCard customer={customer} key={customer.id}/>)}
        </div>
    )

}
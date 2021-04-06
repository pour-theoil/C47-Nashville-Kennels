import React, { useState, useEffect } from "react";
import { CustomerCard } from "./CustomerCard"
import { getAllCustomers, removeCustomer } from "../../modules/CustomerManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        return getAllCustomers().then(customersFromApi => {
            setCustomers(customersFromApi)
        })
    }

    const deleteCustomer = (id) => {
        removeCustomer(id)
        .then(() => getAllCustomers().then(setCustomers))
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <div className="container-card">
            {customers.map(customer => <CustomerCard customer={customer} deleteCustomer={deleteCustomer} key={customer.id}/>)}
        </div>
    )

}
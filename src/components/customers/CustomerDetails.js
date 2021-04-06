import React, { useState, useEffect } from "react"
import { getCustomerById } from "../../modules/CustomerManager"
import { useParams } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({name: "", address:""})

    const {customerId} =useParams();

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer({
                name: customer.name,
                address: customer.address,
                animal: customer.animal
            })
        })
    }, [customerId])
    return (
        <section className="customer">
          <h3 className="customer__name">{customer.name}</h3>
          <div className="customer__breed">{customer.address}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="customer__location">Animal: {customer.animal?.name}</div>
        </section>
      );
}
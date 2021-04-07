import React, { useState, useEffect } from "react"
import { getCustomerById, removeCustomer } from "../../modules/CustomerManager"
import { useHistory, useParams } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({name: "", address:""})
    const [isLoading, setIsLoading] = useState(true)

    const {customerId} =useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        removeCustomer(customerId).then(() =>
            history.push("/customers")
        )
    }

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer({
                name: customer.name,
                address: customer.address,
                animal: customer.animal
            })
            setIsLoading(false)
        })
    }, [customerId])

    return (
        <section className="customer">
          <h3 className="customer__name">{customer.name}</h3>
          <div className="customer__breed">{customer.address}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="customer__location">Animal: {customer.animal?.name}</div>
        
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Remove
            </button>
        </section>
      );
}
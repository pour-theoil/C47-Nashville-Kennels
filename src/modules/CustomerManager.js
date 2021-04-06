const remoteURL = "http://localhost:5002"

export const getCustomerById = (id) => {
  return fetch(`${remoteURL}/customers/${id}?_expand=animal`)
  .then(result => result.json())
} 

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
}

export const removeCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`,{
    method: "DELETE"
  }).then(result => result.json())
}
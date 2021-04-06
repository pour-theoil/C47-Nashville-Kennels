const remoteURL = "http://localhost:5002"

export const getAllOwners = () => {
    return fetch(`${remoteURL}/owners/?_expand=location`)
    .then(response => response.json())
}

export const removeOwner = (id) => {
    return fetch(`${remoteURL}/owners/${id}`, {
        method: "DELETE"
    }).then(result =>result.json)
}
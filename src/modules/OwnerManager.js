const remoteURL = "http://localhost:5002"

export const getAllOwners = () => {
    return fetch(`${remoteURL}/owners`)
    .then(response => response.json())
}
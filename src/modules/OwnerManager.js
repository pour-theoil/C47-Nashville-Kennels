const remoteURL = "http://localhost:5002"

export const getAllOwners = () => {
    return fetch(`${remoteURL}/owners/?_expand=location`)
    .then(response => response.json())
}
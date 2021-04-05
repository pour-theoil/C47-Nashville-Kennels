const remoteURL = "http://localhost:5002"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees/?_expand=location`)
    .then(response => response.json())
}


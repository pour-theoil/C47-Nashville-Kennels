const remoteURL = "http://localhost:5002"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees/?_expand=location`)
    .then(response => response.json())
}

export const deleteSetEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}
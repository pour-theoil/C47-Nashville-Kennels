const remoteURL = "http://localhost:5002"

export const getAnimalById = (id) => {
    return fetch (`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
        .then(res => res.json())
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(result => result.json())
  }

  export const deleteSetAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addAnimal = (newAnimal) => {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(response => response.json())
}
import React, { useState } from "react"

export const PropsAndState = ({yourName}) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        //goodpractice
        //make a copy of the state to modify anbd then setstate to the coppy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return (
        <>
            <h3>Welcome, {yourName}</h3>
            <p>{countClicks}</p>
            <button onClick= {(handleClick)}>Click Me</button>
        </>
    )
}
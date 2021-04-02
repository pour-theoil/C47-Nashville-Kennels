import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animals/AnimalList"
import {CustomerCard} from "./customers/CustomerCard"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/customers">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </Route>

            {/* <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/Employees">
                <EmployeeCard />
            </Route> */}
        </>
    )
}
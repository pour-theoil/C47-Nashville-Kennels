import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animals/AnimalList"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from './customers/CustomerList'
import { LocationList } from "./location/LocationList"
import { OwnerList } from "./owners/OwnerList"
import { AnimalDetail } from "./animals/AnimalDetail"
import { CustomerDetail } from "./customers/CustomerDetails"
import { AnimalForm } from './animals/AnimalForm'


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

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/Employees">
                <EmployeeList />
            </Route>

            <Route path="/Owners">
                <OwnerList />
            </Route>
        </>
    )
}
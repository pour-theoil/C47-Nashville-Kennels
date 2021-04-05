import React, {useState, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
             {employees.map(employee => <EmployeeCard employee={employee} key={employee.id}/>)}
        </div>
    )
}
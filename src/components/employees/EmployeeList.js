import React, {useState, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees,deleteSetEmployee } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const deleteEmployee = id => {
        return deleteSetEmployee(id).then(() => getAllEmployees().then(setEmployees));
    }   

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
             {employees.map(employee => <EmployeeCard employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>)}
        </div>
    )
}
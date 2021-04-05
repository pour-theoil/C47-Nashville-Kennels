import React from "react"

export const EmployeeCard = ({employee, deleteEmployee}) => (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={employee.img} alt="headshot" />
          </picture>
          <h3>Name: <span className="card-employee-name">
            {employee.name}
          </span></h3>
          <p>Location: {employee.location.name}</p>
          <button type="button" onClick={() => deleteEmployee(employee.id)}>Terminate</button>
        </div>
      </div>
)
import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees, updateEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])
  const navigator = useNavigate()

  useEffect(() => {

    getAllEmployees()

  }
    , [])


  function getAllEmployees() {
    console.log("Get All Employees")
    listEmployees().then((response) => {
      setEmployees(response.data)
      console.log(response)
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  }



  const dummyData = [
    {
      "id": 1,
      "firstName": "Duc",
      "lastName": "Nguyen",
      "email": "ducnguyen@example.com"
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Doe",
      "email": "jhondoe@example.com"
    },
    {
      "id": 3,
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "janedoe@example.com"
    }
  ]

  
  function addNewEmployee() {

    console.log("Add New Employee")

    navigator('/add-employee')
  }

  function updateEmployee(id) {

    console.log("Update Employee with id: " + id)

    navigator('/edit-employee/' + id)
  
  }



  function removeEmployee(id) {

    console.log("Remove Employee with id: " + id)
    deleteEmployee(id).then((response) => {
      console.log(response)
      getAllEmployees()
    }
    ).catch((error) => {
      console.log(error)
    }
    )

  }


  return (
    <div className="container">
      <h2 className='text-center'>List of Employee</h2>

      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add New Employee</button>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td className='text-center'>
                  <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                  &nbsp;
                  <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )


}

export default ListEmployeeComponent

//we using rafce
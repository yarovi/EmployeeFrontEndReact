import React, { useState,useEffect } from 'react'
import { getAllDepartments } from '../services/DepartmentService'
import { Link } from 'react-router-dom'
const ListDepartmentComponent = () => {

    /*
    let dummyData = [
        {
            "id":1,
            "departmentName":"IT",
            "departmentDescription":"Information Technology"
        },
        {
            "id":2,
            "departmentName":"HR",
            "departmentDescription":"Human Resources"
        },
        {
            "id":3,
            "departmentName":"Finance",
            "departmentDescription":"Finance Department"
        }
    ]*/

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        getAllDepartments().then((response) => {
            console.log(response.data)
            setDepartments(response.data)
        })
    }
    ,[])
  return (
    <div>
        <h2 className='text-center'>List of Departments</h2>
        <Link to='/add-department'><button className='btn btn-primary'>Add Department</button></Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map(
                        depa => 
                        <tr key = {depa.id}>
                            <td>{depa.id}</td>
                            <td>{depa.departmentName}</td>
                            <td>{depa.departmentDescription}</td>
                            <td>
                                <button className='btn btn-info'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent
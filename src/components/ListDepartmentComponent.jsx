import React, { useState,useEffect } from 'react'
import { getAllDepartments, deleteDepartment } from '../services/DepartmentService'
import { Link, useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        lisOfDepartments()
    }
    ,[])

    function updateDepartment(id){
        console.log('Update Department with id: '+id)
        navigate(`/edit-department/${id}`)
    }

    function lisOfDepartments(){
        getAllDepartments().then((response) => {
            console.log(response.data)
            setDepartments(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    
    function removeDepartment(id){
        console.log('Delete Department with id: '+id)
        deleteDepartment(id)
        .then((response) => {
            console.log(response.data)
            lisOfDepartments()
        }
        ).catch((error) => {
            console.log(error)
        })

    }

  return (
    <div>
        <h2 className='text-center'>List of Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
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
                                <button className='btn btn-info' onClick={()=> updateDepartment(depa.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeDepartment(depa.id)}
                                    style={{marginLeft: "10px"}}>Delete</button>
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
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService'
import {getAllDepartments} from '../services/DepartmentService'

export const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [departmentId, setDepartmentId] = useState('')
  const [departments, setDepartments] = useState([])

  const { id } = useParams()

  const [erros, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  })

  useEffect(() => {
  getAllDepartments()
    .then((response) => {
      console.log(response.data)
      setDepartments(response.data)

    }
    ).catch((error) => {
      console.error(error)
    })
  }, [])

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      console.log('Edit Employee with id: ' + id)
      getEmployeeById(id)
        .then((response) => {
          const employee = response.data
          console.log(employee)
          setFirstName(employee.firstName)
          setLastName(employee.lastName)
          setEmail(employee.email)
          setDepartmentId(employee.departmentId)
        })

    }
  }, [])

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {

      const employee = { firstName, lastName, email, departmentId }
      console.log(employee)

      if (id) {
        console.log('Update Employee with id: ' + id)
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response)
            navigate('/employees')
          }).catch((error) => {
            console.log(error)
          }
          )
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response)
            navigate('/employees')
          }).catch((error) => {
            console.log(error)
          }
          )
      }

    }
  }

    function validateForm() {
      let valid = true;
      const errorsCopy = { ...erros }
      if (firstName.trim()) {
        errorsCopy.firstName = ''
      } else {
        errorsCopy.firstName = 'First Name is required'
        valid = false
      }

      if (lastName.trim()) {
        errorsCopy.lastName = ''
      } else {
        errorsCopy.lastName = 'Last Name is required'
        valid = false
      }

      if (email.trim()) {
        errorsCopy.email = ''
      } else {
        errorsCopy.email = 'Email is required'
        valid = false
      }

      if (departmentId.trim() !== 'Select Department') {
        errorsCopy.department = ''
      }
      else {
        errorsCopy.department = 'Department is required'
        valid = false
      }
      setErrors(errorsCopy)
      return valid

    }


    function pageTitle() {
      if (id) {
        return <h2 className='text-center'>Edit Employee</h2>
      } else {
        return <h2 className='text-center'>Add Employee</h2>
      }
    }
    return (
      <div className='container'>
        <br />
        <br />
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              pageTitle()
            }
            <div className='card-body'>
              <form action="">
                <div className='form-group mb-2'>
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id='firstName' name='firstName'
                    className={`form-control ${erros.firstName ? 'is-invalid' : ''}`}
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                  {erros.firstName && <div className='invalid-feedback'>{erros.firstName}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id='lastName' name='lastName'
                    className={`form-control ${erros.lastName ? 'is-invalid' : ''}`}
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                  {erros.lastName && <div className='invalid-feedback'>{erros.lastName}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id='email' name='email'
                    className={`form-control ${erros.email ? 'is-invalid' : ''}`}
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  {erros.email && <div className='invalid-feedback'>{erros.email}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label htmlFor="department">Select Department:</label>
                  <select id='department' name='department'
                    className={`form-control ${erros.department ? 'is-invalid' : ''}`}
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}>
                    <option value='Select Department'>Select Department</option>
                    {departments.map((department) => (
                      <option key={department.id} 
                      value={department.id}>{department.departmentName}</option>
                    ))}
                  </select>
                  {erros.department && <div className='invalid-feedback'>{erros.department}</div>}
                </div>
                <button className='btn btn-primary' onClick={saveOrUpdateEmployee}>Save</
                button>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
  


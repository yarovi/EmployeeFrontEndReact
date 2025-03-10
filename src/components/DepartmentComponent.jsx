import React,{ useEffect, useState } from 'react'
import { createDepartment,getDepartmentById , updateDepartment} from '../services/DepartmentService'
import { useNavigate , useParams} from 'react-router-dom'
export const DepartmentComponent = () => {

  const [departmentName, setDepartments] = useState('')
  const [departmentDescription, setDepartmentDescription] = useState('')

  const navigator =useNavigate()
  const {id} = useParams()

  useEffect(() => {
    getDepartmentById(id)
      .then(res => {
        let department = res.data
        setDepartments(department.departmentName)
        setDepartmentDescription(department.departmentDescription)
      })
      .catch(err => {
        console.log(err)
      })
  }
  ,[])

  function saveOrUpdateDepartment(e){
    e.preventDefault()
    let department = {departmentName,departmentDescription}
    console.log('Department => ' + JSON.stringify(department))


    if(id){
      console.log('Update Department')
      updateDepartment(id,department)
      .then((response)=>{
        console.log(response.data)
        navigator('/departments')
      }).catch(err => {
        console.log(err)
      })
    }
    else{ 
      createDepartment(department)
      .then((response)=>{
        console.log(response.data)
        navigator('/departments')
      }).catch(err => {
        console.log(err)
      })
    }

    
  }

  function pageTitle() 
  {
    if(id){
      return <h2 className='text-center'>Update Department</h2>
    }else{
      return <h2 className='text-center'>Add Department</h2>
    }
  } 

  return (
    <div className='container'> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'> 
          {pageTitle()}
            <div className='card-body'> 
              <form >
                <div className='form-group mb-2'>
                  <label>Department Name:</label>
                  <input type='text' 
                  placeholder='Department Name' 
                  name='departmentName' 
                  className='form-control' 
                  value={departmentName} 
                  onChange={(e)=>setDepartments(e.target.value)}/>

                </div>
                <div className='form-group mb-2'>
                  <label>Department Description:</label>
                  <input type='text' 
                  placeholder='Department Description' 
                  name='departmentDescription' 
                  className='form-control' 
                  value={departmentDescription} 
                  onChange={(e)=>setDepartmentDescription(e.target.value)}/>
                </div>
                <button className='btn btn-primary' onClick={(e)=>saveOrUpdateDepartment(e)}>Submit</button>
              </form>

            </div>
        </div>
      </div>
    </div>
  )
}

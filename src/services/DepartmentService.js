import React from 'react'
import axios from 'axios'

const DEPARTMENT_API_BASE_URL = "http://localhost:8085/api/v1/departments"

export const getAllDepartments = () =>  axios.get(DEPARTMENT_API_BASE_URL)

export const createDepartment = (department) => axios.post(DEPARTMENT_API_BASE_URL, department) 

export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_API_BASE_URL + '/' + departmentId)  

export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_API_BASE_URL + '/' + departmentId, department)   

export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_API_BASE_URL + '/' + departmentId)    

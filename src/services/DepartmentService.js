import React from 'react'
import axios from 'axios'

const DEPARTMENT_API_BASE_URL = "http://localhost:8085/api/v1/departments"

export const getAllDepartments = () =>  axios.get(DEPARTMENT_API_BASE_URL)
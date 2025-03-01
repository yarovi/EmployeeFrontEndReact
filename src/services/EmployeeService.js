import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/employees";

export const listEmployees = ()  => { return axios.get(EMPLOYEE_API_BASE_URL);
}

export const createEmployee = (employee) => { return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export const getEmployeeById = (employeeId) => { return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

export const updateEmployee = (employeeId,employee) => { return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
}   

export const deleteEmployee = (employeeId) => { return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

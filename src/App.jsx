import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { EmployeeComponent } from './components/EmployeeComponent'
import {DepartmentComponent} from './components/DepartmentComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<ListEmployeeComponent />} />
      <Route path="/employees" element={<ListEmployeeComponent />} />
      <Route path="/add-employee" element={<EmployeeComponent />} />
      <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
      <Route path="/departments" element={<ListDepartmentComponent />} />
      <Route path="/add-department" element={<DepartmentComponent />} />
      <Route path="/edit-department/:id" element={<DepartmentComponent/>}/>
    </Routes>
      <FooterComponent />

    </BrowserRouter>
    
    </>
  )
}

export default App

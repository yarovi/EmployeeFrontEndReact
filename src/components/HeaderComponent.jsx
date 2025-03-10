import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="https://javaguides.net" className="navbar-brand">Employee Management App</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <a href="https://javaguides.net" className="nav-link">Employees</a>
                    </li> */}
                    <li className="nav-item inline">
                      <NavLink to="/employees" className="nav-link">Employees</NavLink>
                    </li>
                    <li className="nav-item inline">
                    <NavLink to="/departments" className="nav-link">Departments</NavLink>
                    </li>
                </ul> 

            </div>
            </nav>
        </header>
    </div>
  )
}

import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar-container">
        <nav className="navbar-wrapper">
          <div className="left-container">
            <Link to="/" className="logo-link">Logo</Link>
          </div>
          <div className="right-container">
            <Link to="/company" className="nav-link">Our Company</Link>
            <Link to="/locations" className="nav-link">Locations</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;
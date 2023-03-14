import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css';

const Navbar = () => {
  return (
    <div>

        <ul className="Navbar">
            <li className="nav-item">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/home">Home</NavLink>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/sobremi">Sobre Mi</NavLink>
            </li>
            <div className="vr"></div>
            <li className="nav-item ">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/contacto">Contacto</NavLink>
            </li>
            <div className="vr"></div>
            <li className="nav-item ">
                <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`} to="/productos">Productos</NavLink>
            </li>
                    
        </ul>
                
    </div>
  )
}

export default Navbar
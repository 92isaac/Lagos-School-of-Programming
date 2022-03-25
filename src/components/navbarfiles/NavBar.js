import React, { useState } from 'react'
import './Navabar.css'
import  Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
 <div className={click ? "main-container" : ""}  onClick={()=>Close()}>

<nav className="navbar navbar-expand-lg " onClick={e => e.stopPropagation()}>
  <div className="container-fluid mx-5">
    <NavLink className="navbar-brand" to="/"> <img src={Logo} alt="logo" width="200" height="50"/> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to="/"  className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} aria-current="page" > Home </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="Courses" className={({ isActive }) => (isActive ? 'active nav-link dropdown-toggle' : 'nav-link dropdown-toggle')}
                onClick={click ? handleClick : null}  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </NavLink>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
           <div  className="row">
             <div className="col-md-6">
             <li><NavLink to="/action" className="dropdown-item" >Action</NavLink></li>
            <li><NavLink to="/another" className="dropdown-item" >Another action</NavLink></li>
            <li><NavLink to="/sometext" className="dropdown-item" >Something else here</NavLink></li>
             </div>
             <div className="col-md-6">
             <li><NavLink to="/action" className="dropdown-item" >Action</NavLink></li>
            <li><NavLink to="/another" className="dropdown-item" >Another action</NavLink></li>
            <li><NavLink to="/sometext" className="dropdown-item" >Something else here</NavLink></li>
             </div>
           </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="About-Us" className={({ isActive }) => (isActive ? 'active nav-link dropdown-toggle' : 'nav-link dropdown-toggle')}
                onClick={click ? handleClick : null}  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </NavLink>
          <ul className="dropdown-menu about" aria-labelledby="navbarDropdownMenuLink">
           <div  className="row">
             <div className="col-md-6">
             <li><NavLink to="/company" className="dropdown-item" >The Company</NavLink></li>
            <li><NavLink to="/team" className="dropdown-item" >The Team</NavLink></li>
            <li><NavLink to="/mentor" className="dropdown-item" >The Mentors</NavLink></li>
            <li><NavLink to="/director" className="dropdown-item" >Non-Executive Directors</NavLink></li>
             </div>
           </div>



          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="Contact us" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} >Contact us  |</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} >  Blog</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
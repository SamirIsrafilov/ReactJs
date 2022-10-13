import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.png';


 class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light navbar-light ">
  <div className="container">
    <Link className="navbar-brand ms-5" to="#"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1 kenarliq" activeclassname="active" aria-current="page" to="/">HOME</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/pages">PAGES</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/about">ABOUT US</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/service">SERVICE</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/blog">BLOG</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/team">TEAM</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/faq">FAQ</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-dark fw-semibold mx-1" activeclassname="active" to="/contact">CONTACT</NavLink>
        </li>

        
     
       
      </ul>
   
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav
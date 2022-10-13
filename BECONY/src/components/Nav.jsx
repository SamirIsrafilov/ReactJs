import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../img/Logo_Becony.png';


class Nav extends Component {
    render() {
        return (
            <div >
                <nav className="container navbar navbar-expand-lg bg-dark navbar-dark p-4 mt-3" id="NavColor">
                    <div className="container">
                        <NavLink className="navbar-brand" to='/'><img src={photo} alt="" style={{ height: "40px" }} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fw-semibold mx-3" activeclassname="active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fw-semibold mx-3" to="/about">About Us</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fw-semibold mx-3" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fw-semibold mx-3" to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white fw-semibold mx-3" to="/pages">Pages</NavLink>
                                </li>
                            </ul>
                            <div className='d-flex mx-4' >
                                <div className='d-flex justify-content-center align-items-center mx-3 '><i className="fa-solid fa-phone text-warning fs-5 bg-secondary p-2"></i></div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <NavLink className="text-white text-decoration-none" to="#">Book Now</NavLink>
                                    <p className='text-white fs-5'>+6221 2002 2012</p>
                                </div>
                            </div>
                            <div className='d-flex mx-4' >
                                <div className='d-flex justify-content-center align-items-center mx-3 '><i class="fa-sharp fa-solid fa-location-dot text-warning fs-5 bg-secondary p-2"></i></div>
                                <div className='d-flex justify-content-center flex-column'>
                                    <NavLink className="text-white text-decoration-none" to="#">Jln Cempaka Wangi No 2</NavLink>
                                    <p className='text-white fs-5'>Jakarta, ID</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col bg-dark p-0 m-0 d-flex align-items-center justify-content-center" id='sol'>
                        <ul className='d-flex align-items-center justify-content-center list-unstyled text-white m-0'>
                            <li className=' me-3'><a href="#"><i className="fa-brands fa-facebook-f text-white"></i></a></li>
                            <li className=' mx-3'><a href="#"><i className="fa-brands fa-linkedin-in text-white"></i></a></li>
                            <li className=' mx-3'><a href="#"><i className="fa-brands fa-twitter text-white"></i></a></li>
                            <li className=' mx-3'><a href="#"><i className="fa-brands fa-google-plus-g text-white"></i></a></li>
                            <li className=' mx-3'><a href="#"><i className="fa-brands fa-pinterest-p text-white"></i></a></li>
                        </ul>

                    </div>
                    <div className="col bg-warning p-0 m-0 d-flex align-items-center justify-content-center" id='sag'>
                        <ul className='d-flex align-items-center justify-content-center list-unstyled text-white m-0'>
                            <li className='mx-2'> <i className="fa-solid fa-calendar-days mx-2"></i>sat-fri</li>
                            <li className='mx-2'> <i className="fa-regular fa-clock mx-2"></i>24 / 7</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
import React, { Component } from 'react'

class Service extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid p-0' id='kolge'>
                    <div className='d-flex justify-content-center align-items-center flex-column' id='about'>
                        <div className='d-flex justify-content-center align-items-center flex-column '>
                            <h1 className='text-white fw-bold '>OUR SERVICE</h1>
                            <h4 className='text-white fs-6'><span className='fw-semibold'>Home</span> <span className='text-warning'><i className="fa-solid fa-angle-right fs-6"></i></span> Our Service</h4>
                        </div>
                    </div>
                </div>



                <div className='service my-5 py-5'>

                    <div className='container mt-5 d-flex justify-content-center align-items-center flex-wrap'>
                        <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i className="fa-solid fa-briefcase" ></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Business</span> Consultant</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>

                        <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i class="fa-solid fa-chart-pie " ></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 ' >Online</span> Consultant</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>


                        <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i class="fa-solid fa-file-lines " ></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 ' >Tax</span> Planning</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>



                        <div className="card mt-4 border border-success border-opacity-10 mx-3 " style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i class="fa-solid fa-building-columns " ></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Bank</span> Investment</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>


                        <div className="card mt-4 border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i class="fa-solid fa-chart-line "></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Industry</span> Consultant</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>


                        <div className="card mt-4 border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
                            <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                                <span className='text-center'><i class="fa-solid fa-leaf "></i></span>
                                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4'>Business</span> Consultant</h5>
                                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='mt-5 d-flex justify-content-center align-items-center' id='subscribe'>
                    <div className='d-flex text-center justify-content-center align-items-center flex-column  ' id='metn'>
                        <h3 className='text-white fs-1 fw-semibold border-5 border-bottom border-dark '>Subsc<span className='border-bottom border-warning border-5'>ribe</span> <span className='text-warning'>Here</span></h3>
                        <p className='text-white my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti <br />commodi ab, ex inventore unde.</p>
                        <h2 className='text-white mt-3 mb-5 fw-semibold'>GET NEWS AND UPDATE</h2>
                        <div className="input-group mb-3 d-flex justify-content-center align-items-center rounded-pill" id='myinput'>
                            <input type="text" className="form-control border-0 rounded-pill bg-transparent text-white d-flex" placeholder="Enter email" />
                            <button className="btn  rounded-pill border-0 bg-warning text-white fw-bold me-1" type="button" id="mybtn" >SUBSCRIBE</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Service
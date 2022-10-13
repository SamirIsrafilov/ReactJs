import React, { Component } from 'react';
import wlc from '../img/wlc.png';


class About extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid p-0' id='kolge'>
          <div className='d-flex justify-content-center align-items-center flex-column' id='about'>
            <div className='d-flex justify-content-center align-items-center flex-column '>
              <h1 className='text-white fw-bold '>ABOUT US</h1>
              <h4 className='text-white fs-6'><span className='fw-semibold'>Home</span> <span className='text-warning'><i className="fa-solid fa-angle-right fs-6"></i></span> About Us</h4>
            </div>
          </div>
        </div>



        <div className="container mt-5 pt-5">
          <div className="row mx-5">
            <div className="col-12 col-md-8 ">
              <h1 className='text-dark fw-bold my-4'>Welcome To Bug Somadhan</h1>
              <p className='text-dark fs-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut obcaecati molestias,<br />
                reprehenderit vel dolorum similique ab error voluptas eius sunt sint voluptatem veniam <br />
                temporibus rerum, ipsam saepe commodi inventore, laborum?
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut obcaecati molestias,<br />
                reprehenderit vel dolorum similique ab error voluptas eius sunt sint voluptatem veniam <br />
                temporibus rerum, ipsam saepe commodi inventore, laborum?
              </p>
              <button className='btn btn-warning rounded-0 text-dark fw-bolder my-3' id='infoBtn'>MORE INFO</button>
            </div>
            <div className="col-12 col-md-4 ">
              <img src={wlc} alt="" style={{ width: "290px" }} />
            </div>
          </div>
        </div>




        <div className='service mt-5'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-center text-dark fw-bolder border-bottom border-dark border-5 d-inline' style={{ width: "300px" }}>
              Our <span className='text-warning'><span className='border-bottom border-warning'>Ser</span>vice</span> </h1>
            <p className='text-center text-dark mt-2 fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti <br />
              commodi ab, ex inventore unde.</p>
          </div>


          <div className='container mt-5 d-flex justify-content-center align-items-center flex-wrap'>
            <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-briefcase " ></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Business</span> Consultant</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>

            <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-chart-pie " ></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 ' >Online</span> Consultant</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>


            <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-file-lines " ></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 ' >Tax</span> Planning</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>



            <div className="card mt-4 border border-success border-opacity-10 mx-3 " style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-building-columns " ></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Bank</span> Investment</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>


            <div className="card mt-4 border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-chart-line "></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Industry</span> Consultant</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>


            <div className="card mt-4 border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i className="fa-solid fa-leaf "></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Business</span> Consultant</h5>
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

export default About
import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid p-0' id='kolge'>
          <div className='d-flex justify-content-center align-items-center flex-column' id='about'>
            <div className='d-flex justify-content-center align-items-center flex-column '>
              <h1 className='text-white fw-bold '>CONTACT US</h1>
              <h4 className='text-white fs-6'><span className='fw-semibold'>Home</span> <span className='text-warning '><i className="fa-solid fa-angle-right fs-6"></i></span> Contact Us</h4>
            </div>
          </div>
        </div>




        <div className="container text-center my-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap">
              <div className='d-flex justify-content-center align-items-center flex-column border border-success border-opacity-10 contact_info'>
                <a href="#"><i className="fa-solid fa-location-dot fs-4 my-3"></i></a>
                <h4 className='text-dark fw-bolder '>Address</h4>
                <p>4716 Beeghley Street Salado TX <br />76571</p>
              </div>


              <div className='d-flex justify-content-center align-items-center flex-column border border-success border-opacity-10 contact_info'>
                <a href="#"><i className="fa-solid fa-envelope fs-4 my-3"></i></a>
                <h4 className='text-dark fw-bolder'>Email</h4>
                <p>DaisySPeters@rhyta.com</p>
              </div>


              <div className='d-flex justify-content-center align-items-center flex-column border border-success border-opacity-10 contact_info'>
                <a href="#"><i className="fa-solid fa-phone fs-4 my-3"></i></a>
                <h4 className='text-dark fw-bolder '>Phone</h4>
                <p>7619614419<br /> 34296625</p>
              </div>


              <div className='d-flex justify-content-center align-items-center flex-column border border-success border-opacity-10 contact_info'>
                <a href="#"><i className="fa-solid fa-earth-americas fs-4 my-3"></i></a>
                <h4 className='text-dark fw-bolder '>Website</h4>
                <p>www.companywebsite.com</p>
              </div>

            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="my-3 d-flex">

                <input type="text" className="form-control rounded-0 p-3 border border-success border-opacity-10 me-2" placeholder="Full Name" />
                <input type="email" className="form-control rounded-0 p-3 border border-success border-opacity-10 " placeholder="Email" />

              </div>
              <div >
                <textarea className="form-control border border-success border-opacity-10 text-secondary" rows="8">Message</textarea>
                <button className='btn btn-warning mt-4 d-flex flex-row text-dark fw-bold fs-5 py-2 px-5 rounded-0' type='submit'>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5' style={{width: '100%',height:'500px'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2s!4v1662052510391!5m2!1str!2s"
            style={{width: '100%',height:'500px'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>



      </div>
    )
  }
}

export default Contact
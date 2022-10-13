import React, { Component } from 'react';
import logo from '../img/Logo_Becony.png';
import img1 from '../img/instaPost/01.jpg';
import img2 from '../img/instaPost/02.jpg';
import img3 from '../img/instaPost/03.jpg';
import img4 from '../img/instaPost/04.jpg';
import img5 from '../img/instaPost/05.jpg';
import img6 from '../img/instaPost/06.jpg';



class Footer extends Component {
  render() {
    return (
     <div>
      <div className='px-5 bg-warning d-flex  align-items-center' id='footerTop'>
        <h1>Ready to care for your car?</h1>
        <button className='btn btn-warning rounded-0 border-1 border-dark'>REQUEST A QUOTE</button>
      </div>
       <div className='pt-5' id='foot'>
        <div className="container">
          <footer className='mx-5'>
            <div className="row py-5  border-bottom border-secondary">
              <div class="col-6 col-md-3 mb-3 p-0">
                <div className='text-white mb-2 '><img src={logo} alt="" style={{width:"130px",height:"40px"}} /></div>
                <p className='text-white mb-2 lh-lg'>Lorem ipsum dolor sit amet,consectetur<br/>  adipiscing elit. </p>
                <ul className='list-unstyled my-4' id='infoTwo'>
                  <li className='text-white my-2 '><i className="fa-solid fa-location-dot me-2 text-warning"></i><span>Jln Cempaka Wangi No 22, Jakarta - Indonesia</span></li>
                  <li className='text-white my-2'><i className="fa-solid fa-envelope me-2 text-warning"></i><span>hello@yourdomain.tld</span></li>
                  <li className='text-white my-2'><i className="fa-solid fa-phone me-2 text-warning"></i><span>+6221 2002 2012</span></li>

                </ul>
                <ul className='d-flex align-items-center list-unstyled text-white' id='social'>
                  <li className=' me-1'><a href="#"><i className="fa-brands fa-instagram p-2"></i></a></li>
                  <li className=' mx-1'><a href="#"><i className="fa-brands fa-behance p-2"></i></a></li>
                  <li className=' mx-1'><a href="#"><i className="fa-brands fa-dribbble p-2"></i></a></li>
                  <li className=' mx-1'><a href="#"><i className="fa-brands fa-twitter p-2"></i></a></li>
                  <li className=' mx-1'><a href="#"><i className="fa-brands fa-youtube p-2"></i></a></li>

                </ul>
              </div>

              <div className="col-6 col-md-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZHJhLCBCaXJsZcWfaWsgS3JhbGzEsWs!5e0!3m2!1str!2s!4v1662670607397!5m2!1str!2s"
              style={{width:"490px",height:"312px"}}
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>

              

              <div className="col-md-3  mb-3 d-flex flex-column mx-auto p-0" id='Myinput'>
                <h2 className='text-white fw-semibold '>Newsletter</h2>
                <p className='text-white py-2'>Turpis in lorem eget et porttitor sapien<br/> montes nec litora tellus pulvinar.</p>
                <div className='input-group  d-flex flex-column' >
                <input type="text" className="form-control my-2 rounded-0 py-2" placeholder="Your name" style={{width:"305px"}} />
                <input type="email" className="form-control my-2 rounded-0 py-2" placeholder="Your email" style={{width:"305px"}} />
                <button className='btn btn-warning rounded-0 border-0 mt-2'>SIGN UP</button>

              </div>
              </div>
            </div>



            <div className="d-flex justify-content-center align-items-center text-white" >
              <p className='text-center m-0 py-4'>Copyright © 2022 Becony, All rights reserved. Present by MoxCreative</p>
              

            </div>
          </footer>
        </div>
      </div>
     </div>
    )
  }
}

export default Footer;
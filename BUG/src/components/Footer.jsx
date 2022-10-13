import React, { Component } from 'react';
import logo2 from '../img/logo2.png';
import img1 from '../img/instaPost/01.jpg';
import img2 from '../img/instaPost/02.jpg';
import img3 from '../img/instaPost/03.jpg';
import img4 from '../img/instaPost/04.jpg';
import img5 from '../img/instaPost/05.jpg';
import img6 from '../img/instaPost/06.jpg';



class Footer extends Component {
  render() {
    return (
      <div className='pt-5  bg-dark'>
        <div className="container">
          <footer className='mx-5'>
            <div className="row py-5">
              <div className="col-6 col-md-3 mb-3 p-0">
                <div className='text-white mb-2 '><img src={logo2} alt="" /></div>
                <p className='text-white mb-2 lh-lg'>Lorem ipsum dolor sit amet, consectetur<br />
                  adipisicing elit. Commodi facilis ab iure<br />
                  nihil quidem. Aperiam nobis rerum <br />
                  facere illo asperiores.</p>
                <ul className='d-flex align-items-center list-unstyled text-white ' id='social'>
                  <li className=' me-3'><a href="#"><i className="fa-brands fa-facebook-f text-white"></i></a></li>
                  <li className=' mx-3'><a href="#"><i className="fa-brands fa-linkedin-in text-white"></i></a></li>
                  <li className=' mx-3'><a href="#"><i className="fa-brands fa-twitter text-white"></i></a></li>
                  <li className=' mx-3'><a href="#"><i className="fa-brands fa-google-plus-g text-white"></i></a></li>
                  <li className=' mx-3'><a href="#"><i className="fa-brands fa-pinterest-p text-white"></i></a></li>

                </ul>
              </div>

              <div className="col-6 col-md-2">
                <h5 className='text-white fw-semibold'><span className='pb-2 border-bottom border-3 border-warning'>QUI</span>CK LINK</h5>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Seo Services</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Virtual Marketing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Content Manage</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Social Media</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Black hat Seo</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <h5 className='text-white fw-semibold'><span className='pb-2 border-bottom border-3 border-white'>RE</span><span className='pb-2 border-bottom border-3 border-warning'>CE</span>NT POSTS</h5>
                <ul className="nav flex-column mt-4 lh-sm">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Just another amazing blog post</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white"><i className="fa-solid fa-calendar-days"></i> 07 / 06 / 2018</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Just another amazing blog post</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white"><i className="fa-solid fa-calendar-days"></i> 07 / 06 / 2018</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Just another amazing blog post</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white"><i className="fa-solid fa-calendar-days"></i> 07 / 06 / 2018</a></li>
                </ul>
              </div>

              <div className="col-md-3  mb-3 d-flex flex-column p-0 ">
                <h5 className='text-white fw-semibold '><span className='pb-2 border-bottom border-3 border-white'>IN</span><span className='pb-2 border-bottom border-3 border-warning'>ST</span>AGRAM POST</h5>
                <ul className='d-flex flex-wrap p-0 mt-4'>
                  <li className='m-1'><img src={img1} style={{width: "80px"}} alt=""/></li>
                  <li className='m-1'><img src={img2} style={{width: "80px"}} alt=""/></li>
                  <li className='m-1'><img src={img3} style={{width: "80px"}} alt=""/></li>
                  <li className='m-1'><img src={img4} style={{width: "80px"}} alt=""/></li>
                  <li className='m-1'><img src={img5} style={{width: "80px"}} alt=""/></li>
                  <li className='m-1'><img src={img6} style={{width: "80px"}} alt=""/></li>

                </ul>

              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-white border-top border-light" >
              <p className='text-center m-0 py-3'>Bug somadhan © 2018. all rights reserved</p>

            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Footer;
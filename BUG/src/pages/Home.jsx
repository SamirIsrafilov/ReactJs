import React, { Component } from 'react';
import '../sass/style.css';
import img1 from '../img/slider/01.jpg';
import img2 from '../img/slider/02.jpg';
import img3 from '../img/slider/03.jpg';
import wlc from '../img/wlc.png';


class Home extends Component {
  render() {
    return (
      <div >
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" >
          <div className="carousel-indicators" >
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active position-relative" data-bs-interval="10000" >
              <img src={img1} className="d-block w-100" alt="..."  />
              <div className="carousel-caption d-none d-md-block text-start" id='text'>
                <h1 className='text-white my-3'>we provide world best service</h1>
                <p className='text-white lh-base fw-semibold fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Non placeat consequuntur voluptatibus earum.</p>
                <button className='btn btn-warning text-dark fw-bolder rounded-0'>MORE INFO</button>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="2000">
              <img src={img2} className="d-block w-100" alt="..."  />
              <div className="carousel-caption d-none d-md-block text-start " id='text'>
                <h1 className='text-white my-3'>we provide world best service</h1>
                <p className='text-white lh-base fw-semibold fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Non placeat consequuntur voluptatibus earum.</p>
                <button className='btn btn-warning text-dark fw-bolder rounded-0'>MORE INFO</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..."  />
              <div className="carousel-caption d-none d-md-block text-start" id='text'>
                <h1 className='text-white my-3'>we provide world best service</h1>
                <p className='text-white lh-base fw-semibold fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Non placeat consequuntur voluptatibus earum.</p>
                <button className='btn btn-warning text-dark fw-bolder rounded-0'>MORE INFO</button>
              </div>
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



        <div className='service my-5 py-5'>
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
                <span className='text-center'><i class="fa-solid fa-chart-pie " ></i></span>
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 ' >Online</span> Consultant</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>


            <div className="card border border-success border-opacity-10 mx-3" style={{ width: '350px' }} >
              <div className="card-body d-flex justify-content-center align-items-center flex-column kart">
                <span className='text-center'><i class="fa-solid fa-file-lines" ></i></span>
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
                <h5 className='fs-4 my-4 fw-bold'><span className='fs-4 '>Business</span> Consultant</h5>
                <p className="card-text text-center mb-3">Lorem ipsum dolor sit amet, consectetur<br /> adipisicing elit. Eos, saepe.</p>
              </div>
            </div>
          </div>

        </div>












      </div>





    )
  }
}

export default Home
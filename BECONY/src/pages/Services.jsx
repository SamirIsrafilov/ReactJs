import React, { Component } from 'react';
import photo3 from '../img/M2.png';
import ProductItem from '../components/ProductItem';
import products from '../data/productdata';


 class Services extends Component {
  render() {
    return (
      <div>
        <div id='about'>
          <div className='d-flex  '  id='aboutHero'>
        
          <div className='container d-flex align-items-center justify-content-between mt-5'>
          <h1 className='text-white ms-5'>SERVICES</h1>
            <a href="#" className='text-decoration-none text-white fw-semibold me-5'>HOME<span className='mx-2'> <i class="fa-solid fa-circle-arrow-right text-warning "></i></span>SERVICES</a>
          </div>
          </div>
        </div>

                <div className='container mt-4 d-flex justify-content-between ' id='section4'><img src={photo3} alt="" />
                    <div>
                        <h6 className='text-center fw-semibold ms-5 ps-5'><span className='ms-5'>OUR SERVICES</span></h6>
                        <div className='d-flex'>
                            <h1 className='px-3 border-end border-dark border-2 fw-bold'>Service We Provide</h1>
                            <button className='btn btn-warning mx-3 rounded-0 border-0 fw-semibold'>VIEW ALL<br /> SERVICES</button>
                        </div>
                    </div>
                </div>

                <div className='container d-flex flex-wrap' id='kartlar' >
                    {products[0].map((fd) => {
                        return <ProductItem photo={fd.img} title={fd.title} text={fd.text} button={fd.button} icon="fa-solid fa-circle-arrow-right" />
                    })}
                </div>

                <div className='mt-5' id='section5'>
                    <div id='info'>
                        <div className='container'>
                            <h1 className='text-white fw-bold'>Keep it fresh and clean<br /> with premium detailing<br /> services</h1>
                            <p className='text-white py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className='btn btn-warning rounded-0 border-0 fw-semibold'>DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}

export default Services
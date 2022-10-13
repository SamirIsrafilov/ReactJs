import React, { Component } from 'react';
import photo1 from '../img/new-car-dashboard.jpg';
import photo2 from '../img/7ecbizgyr4e-1536x711.jpg';
import photo3 from '../img/M2.png';
import photo4 from '../img/car-wrapping-with-foil-drying-with-fan-car-service-e1660384470161 (1).jpg';
import ProductItem from '../components/ProductItem';
import products from '../data/productdata';
import ProductItem1 from '../components/ProductItem1';
import ProductItem2 from '../components/ProductItem2';





class Home extends Component {
    render() {
        return (
            <div >
                <div id='home'>
                    <div className='d-flex justify-content-center flex-column ps-5 pt-5' id='hero'>
                        <div className='ms-5 ps-5 mt-5 pt-5'>
                            <h1 className='text-white  fw-bold'>Protect Your<br /> Investment</h1>
                            <p className='text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br /> nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className='btn btn-warning rounded-0 text-dark border-0 mt-3'>GET A QUOTE</button>
                        </div>
                    </div>
                </div>

                <div id="sectionTwo">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <h6>WHO WE ARE</h6>
                                <h1 className='text-dark fw-bold my-3'>Make your car shine from<br /> the inside out</h1>
                                <ul className='d-flex p-0'>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                    <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                                </ul>
                            </div>
                            <div className="col">
                                <p >Dictumst arcu hac ultrices aptent tristique<br />
                                    consectetuer. Faucibus facilisi interdum mollis<br />
                                    sodales duis fames. Dictumst montes est letius<br /> tincidunt ut accumsan donec.</p>
                                <button className='btn btn-warning rounded-0 border-0 mt-3'>DISCOVER MORE</button>
                            </div>
                        </div>
                    </div>

                    <div class="container mt-5 ">
                        <div class="row">
                            <div class="col p-0" >
                                <div className='p-4' id='kart1'>
                                    <i class="fa-solid fa-quote-left fs-1 text-warning"></i>
                                    <p className='text-muted fs-6'>We've taken the hassle out of getting<br />
                                        your car detailed without taking away<br />
                                        the quality or results</p>
                                    <h5 className='text-dark fw-bold'>Donald M. Dobso</h5>
                                </div>
                            </div>
                            <div class="col">
                                <img src={photo1} alt="" style={{ width: "400px", height: "260px" }} />
                            </div>
                            <div class="col">
                                <img src={photo2} alt="" style={{ width: "400px", height: "260px" }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container d-flex my-5 ' id='section3'>
                    <div className='p-3' ><span className='text-warning border-end border-2 border-dark px-4 fw-bold'>15+</span></div>
                    <div className='p-3 d-flex justify-conten-center align-items-center '><h2 className=' fw-semibold'>Years of<br /> Experience</h2></div>

                    <div className='p-3' ><span className='text-warning border-end border-2 border-dark px-4 fw-bold'>23+</span></div>
                    <div className='p-3 d-flex justify-conten-center align-items-center '><h2 className=' fw-semibold'>Corporate<br /> Partner</h2></div>

                    <div className='p-3' ><span className='text-warning border-end border-2 border-dark px-4 fw-bold'>17K</span></div>
                    <div className='p-3 d-flex justify-conten-center align-items-center '><h2 className=' fw-semibold'>Car<br /> Detailing</h2></div>

                    <div className='p-3' ><span className='text-warning border-end border-2 border-dark px-4 fw-bold'>40+</span></div>
                    <div className='p-3 d-flex justify-conten-center align-items-center '><h2 className=' fw-semibold'>Our<br /> Services</h2></div>
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

                <div className='d-flex justify-content-center align-items-center my-5' id='section6'>
                    <div className='text-center'>
                        <h1 className='text-white'>Discount up to 30% only this<br /> month for new member</h1>
                        <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br /> nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className='btn btn-warning rounded-0 border-0 fw-semibold mt-3'>CLAIM PROMO</button>
                    </div>
                </div>

                <div id='section7'>
                    <div className="container ">
                        <div class="row">
                            <div className="col-12 col-sm-12 col-md-4">
                              <img src={photo4} alt="" style={{width:"435px",height:"560px"}} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 ps-5">
                               <div>
                                <h6 className='mt-2'>WHY CHOOSE US</h6>
                                <h1 className='pe-5 my-3'>Trust the professionals for a clean and polished finish</h1>
                                <p>Sociosqu luctus facilisis lacinia elit dictum ante torquent finibus maecenas per. Si quis ac porttitor conubia egestas<br/> eu. Vehicula cursus sociosqu platea commodo consectetur justo lobortis.</p>
                               </div>
                              <div className='d-flex flex-wrap'>
                              {products[2].map((fd) => {
                        return <ProductItem2  title={fd.title} text={fd.text}  />
                    })}
                              </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='my-5' id='section8'>
                    <div className='text-center'>
                        <h6>OUR BLOG</h6>
                        <h1>Latest Article</h1>
                        <ul className='d-flex p-0 list-unstyled justify-content-center'>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                            <li><i className="fa-solid fa-square-full text-warning mx-1"></i></li>
                        </ul>

                    </div>
                    <div className='container d-flex flex-wrap'>
                        {products[1].map((fd) => {
                            return <ProductItem1 photo={fd.img} name={fd.name} title={fd.title} text={fd.text} comment={fd.comment} />
                        })}
                    </div>

                </div>



            </div>
        )
    }
}

export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../componet/Header';

import product12 from '../../assets/images/theme-2/product-12.jpg';
import Footer from '../../componet/Footer';
// import Footer from '../../componet/Footer';

const About = () => {
    // First modal state
    const [firstModal, setFirstModal] = useState(false);
    // Second modal state with a unique name
    const [secondModal, setSecondModal] = useState(false);
    // Third modal state with a unique name
    const [thirdModal, setThirdModal] = useState(false);
    // Third modal state with a unique name
    const [fourModal, setFourModal] = useState(false);

    // Third modal state with a unique name
    const [fiveModal, setFiveModal] = useState(false);

    // Handlers for the first modal
    const handleCloseFirstModal = () => setFirstModal(false);
    const handleShowFirstModal = () => setFirstModal(true);

    // Handlers for the second modal
    const handleCloseSecondModal = () => setSecondModal(false);
    const handleShowSecondModal = () => setSecondModal(true);


    // Handlers for the Third modal
    const handleCloseThirdModal = () => setThirdModal(false);
    const handleShowThirdModal = () => setThirdModal(true);

    // Handlers for the Third modal
    const handleCloseFourModal = () => setFourModal(false);
    const handleShowFourModal = () => setFourModal(true);

    // Handlers for the Third modal
    const handleCloseFiveModal = () => setFiveModal(false);
    const handleShowFiveModal = () => setFiveModal(true);

    return (
      <>
        <Header />  
        <div className='about-bg'>
        </div>
        <div class="container aboutSection">
                <div class="row g-4 flex-row-reverse mt-5">
                    <div class="col-lg-12">
                        <div className='row'>
                             <div className='col-sm-12'>
                                <h2 className='heading text-center'>About us </h2>
                               <p>At Remote Physios, we believe in making high-quality physiotherapy accessible to everyone, right from the comfort of their homes. With our innovative, tech-enabled approach, we combine the expertise of certified physiotherapists with advanced IoT devices to deliver personalized care remotely. Our mission is to revolutionize the way people recover from injuries, manage chronic pain, and improve their physical health—without the need for time-consuming clinic visits.</p>

                                <p> Founded by a team of experienced physiotherapists and healthcare technology experts, Remote Physio is designed to meet the modern demands of convenience and efficiency. Whether you are a busy professional struggling with back pain, a senior who needs regular care, or someone recovering from surgery, we create customized treatment plans to fit your unique needs.</p>

                                <p>Our platform offers video consultations with trained physiotherapists, real-time monitoring, and data-driven insights, ensuring every session is effective and tailored to your progress. By blending healthcare with cutting-edge technology, we aim to empower individuals to take control of their well-being and live healthier, pain-free lives.</p>

                                <p> Join us on a journey to better health with Remote Physio—because recovery should be convenient, accessible, and personalized.</p>
                            
                             </div>   
                        </div>
                        <div class="row mt-0 g-4 mb-4 justify-content-center">
                            <div class="col-sm-6 col-md-6 col-lg-4 ">
                                <div class="product-box">
                                    <figure class="thumb">
                                         <img src={product12} alt="" class="lazy" />
                                    </figure>
                                    <div class="content">
                                        <h3 class="title"><a href="javascript:void(0)">Anubha Singhai</a></h3>
                                        <div class="price">Anubha Singhai is the Founder and Director for Remote Physios, With extensive experience in manag...</div>
                                        <Link onClick={handleShowFirstModal} className='btn theme-color-bg mt-3 w-100 text-white'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 ">
                                <div class="product-box">
                                    <figure class="thumb">
                                         <img src={product12} alt="" class="lazy" />
                                    </figure>
                                    <div class="content">
                                        <h3 class="title"><a href="javascript:void(0)">Anant Singh</a></h3>
                                        <div class="price">Anant Singh is a dedicated Senior Physiotherapist at the Govt. Homeopathy Medical College and Hospital in Bhopal</div>
                                        
                                        <Link onClick={handleShowSecondModal} className='btn theme-color-bg mt-3 w-100 text-white'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 ">
                                <div class="product-box">
                                    <figure class="thumb">
                                         <img src={product12} alt="" class="lazy" />
                                    </figure>
                                    <div class="content">
                                        <h3 class="title"><a href="javascript:void(0)">Dr. Shiv Shankar Pawar</a></h3>
                                        <div class="price">Dynamic Management Leader with more than 2 decades of Expertise in Business Strategy, HR, Sales, and Marketing</div>
                                        <Link onClick={handleShowThirdModal} className='btn theme-color-bg mt-3 w-100 text-white'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 ">
                                <div class="product-box">
                                    <figure class="thumb">
                                         <img src={product12} alt="" class="lazy" />
                                    </figure>
                                    <div class="content">
                                        <h3 class="title"><a href="javascript:void(0)">Binny Jacob</a></h3>
                                        <div class="price">A highly skilled Solution Architect and IT expert with a Master's in Computer Application from Pune University</div>
                                        <Link onClick={handleShowFourModal} className='btn theme-color-bg mt-3 w-100 text-white'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 ">
                                <div class="product-box">
                                    <figure class="thumb">
                                         <img src={product12} alt="" class="lazy" />
                                    </figure>
                                    <div class="content">
                                        <h3 class="title"><a href="javascript:void(0)">Rahul L Dubey</a></h3>
                                        <div class="price">Highly skilled health care professional with more than 13 years of extensive expertise in delivering safe, quality and</div>
                                        <Link onClick={handleShowFiveModal} className='btn theme-color-bg mt-3 w-100 text-white'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
              {/* first*/}
                    {firstModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Profile</h5>
                                        <button type="button" className="btn-close close" onClick={handleCloseFirstModal}>
                                            {/* <span>&times;</span> */}
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="col-sm-12">
                                            <div class="product-box p-0 shadow-none">
                                                <figure class="thumb">
                                                        <img width={150} className='lazy rounded-circle' src={product12} alt="" />
                                                </figure>
                                                <div class="content">
                                                    <h3 class="title"><a href="javascript:void(0)">Anubha Singhai</a></h3>
                                                    <div class="price">Anubha Singhai is the Founder and Director for Remote Physios, With extensive experience in managing operations and expanding physiotherapy services, Anubha oversees a network of clinics and telehealth centers in Bhopal and beyond. She has a strong background in academia, having served as a lecturer and professor, and has contributed to the field through research and publications. Anubha is dedicated to enhancing physiotherapy practices in India and is recognized for her innovative methodologies and community impact, earning several awards and accolades throughout her career. Balancing her professional responsibilities with family life, she remains committed to advancing healthcare for patients and physiotherapists alike.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Backdrop */}
                    {firstModal && <div className="modal-backdrop fade show"></div>}
            {/**first-END**/}    

              {/*SECOND */}
                    {secondModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Profile</h5>
                                        <button type="button" className="btn-close close" onClick={handleCloseSecondModal}>
                                            {/* <span>&times;</span> */}
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="col-sm-12">
                                            <div class="product-box p-0 shadow-none">
                                                <figure class="thumb">
                                                        <img width={150} className='lazy rounded-circle' src={product12} alt="" />
                                                </figure>
                                                <div class="content">
                                                    <h3 class="title"><a href="javascript:void(0)">Anant Singh</a></h3>
                                                    <div class="price">Anant Singh is a dedicated Senior Physiotherapist at the Govt. Homeopathy Medical College and Hospital in Bhopal, currently pursuing a PhD in NeuroRehabilitation. He holds a Bachelor’s degree in Physiotherapy (2006) and a Master’s degree in Physiotherapy with a specialization in Neurology (2008). Anant possesses extensive clinical and educational experience, having served as a lecturer and assistant professor in various institutions. He has actively contributed to the field through numerous academic presentations and community awareness initiatives related to physiotherapy and ergonomics. Anant is committed to advancing patient care and promoting best practices within the physiotherapy profession.   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Backdrop */}
                    {secondModal && <div className="modal-backdrop fade show"></div>}
            {/**SECOND-END**/}      

              {/*THIRD */}
                    {thirdModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Profile</h5>
                                        <button type="button" className="btn-close close" onClick={handleCloseThirdModal}>
                                            {/* <span>&times;</span> */}
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="col-sm-12">
                                            <div class="product-box p-0 shadow-none">
                                                <figure class="thumb">
                                                        <img width={150} className='lazy rounded-circle' src={product12} alt="" />
                                                </figure>
                                                <div class="content">
                                                    <h3 class="title"><a href="javascript:void(0)">Dr. Shiv Shankar Pawar</a></h3>
                                                    <div class="price">Dynamic Management Leader with more than 2 decades of Expertise in Business Strategy, HR, Sales, and Marketing—Driving Growth and Building High-Impact Teams</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Backdrop */}
                    {thirdModal && <div className="modal-backdrop fade show"></div>}
            {/**THIRD-END**/}    
            
            {/*FOUR */}
            {fourModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Profile</h5>
                                    <button type="button" className="btn-close close" onClick={handleCloseFourModal}>
                                        {/* <span>&times;</span> */}
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div class="col-sm-12">
                                        <div class="product-box p-0 shadow-none">
                                            <figure class="thumb">
                                                    <img width={150} className='lazy rounded-circle' src={product12} alt="" />
                                            </figure>
                                            <div class="content">
                                                <h3 class="title"><a href="javascript:void(0)">Binny Jacob</a></h3>
                                                <div class="price">A highly skilled Solution Architect and IT expert with a Master's in Computer Application from Pune University, specializing in designing scalable, high-performance systems that leverage new technologies. </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseFourModal}>
                                    Close
                                    </button>
                                    {/* <button type="button" className="btn btn-primary">
                                    Save changes
                                    </button> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Backdrop */}
                    {fourModal && <div className="modal-backdrop fade show"></div>}
            {/**FOUR-END**/}    

            
            {/*FIVE */}
            {fiveModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Profile</h5>
                                        <button type="button" className="btn-close close" onClick={handleCloseFiveModal}>
                                            {/* <span>&times;</span> */}
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="col-sm-12">
                                            <div class="product-box p-0 shadow-none">
                                                <figure class="thumb">
                                                        <img width={150} className='lazy rounded-circle' src={product12} alt="" />
                                                </figure>
                                                <div class="content">
                                                    <h3 class="title"><a href="javascript:void(0)">Rahul L Dubey</a></h3>
                                                    <div class="price"> Highly skilled health care professional with more than 13 years of extensive expertise in delivering safe, quality and patient-centric physiotherapy services through commitment to service availability, accessibility and excellence. </div>
                                                    <ul class="nav flex-column text-left">
                                                        <li>
                                                            <ul>
                                                                <li class="nav-item">
                                                                    <a class="nav-link text-dark">Adapt at working with patients and helping them to achieve their functional goals.</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link text-dark">Designs services to achieve optimal health outcomes and utilizes resources effeciently and safely.</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link text-dark">Leverages holistic approach incorporating a broad range of physical, physiological therapeutic interventions and aids.</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link text-dark">Demonstrates integrity, accountability and judgement in the best interests of client.
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Backdrop */}
                    {fiveModal && <div className="modal-backdrop fade show"></div>}
            {/**FIVE-END**/}    

            <Footer />
      </>
    )  
};

export default About;
// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../../componet/Header/index';
import Footer from '../../componet/Footer/index';
import "swiper/css";
import { Autoplay } from 'swiper/modules'; // Import the modules properly
import customerFeedback from '../../assets/images/theme-2/customer-feedback.png';
import remotePhysios from '../../assets/images/theme-2/remotePhysio.png';
import servicesImg from '../../assets/images/theme-2/services-img.png';
import client1 from '../../assets/images/theme-2/client-1.png';
import client2 from '../../assets/images/theme-2/client-2.png';
import client3 from '../../assets/images/theme-2/client-3.png';
import product01 from '../../assets/images/theme-2/product01.png';
import testimonialImage from "../../assets/images/theme-2/testimonial-image.png";
import testimonialbg from '../../assets/images/theme-2/testimonial-bg.png';
import cta from '../../assets/images/theme-2/cta.png';
import Video from '../../assets/video/video.mp4';


import { FaHeart, FaUserAlt, FaPlay, FaChevronRight, FaGamepad ,FaStar  } from "react-icons/fa";


const Home = () => {
   
  const [watchVideo, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
       
    <div className="page-wrapper">
        <Header />
        <div className="header-area">
            <div className="container-fluid container-lg">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="header-content">
                            <h1 className="main-title">Personalized Physiotherapy, Delivered to Your Doorstep</h1>
                            <div className="desc">
                                <p>Transforming the way you heal with remote physiotherapy sessions and IoT-enabled devices, bringing comfort, convenience, and expert care to your home.</p>
                            </div>
                            <div className="header-actions">
                                <a href='appointment' className="primary-button white-button">
                                    <span className="part front">Book Your Free Consultation <span className="ls-angle-right2 ms-1"><FaChevronRight /></span></span>
                                    <span className="part back">Book Your Free Consultation <span className="ls-angle-right2 ms-1"><FaChevronRight /></span></span>
                                </a>
                                <Link onClick={handleShow} className="play-button ms-4"><span
                                        className=" play-icon"><FaPlay /></span> <span className="label">Watch Demo</span></Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6">
                        <figure className="header-image">
                            <span className="header-image-bg"><img src={headerImagecirlce}
                                    alt="cirlce" /></span>
                            <img src={headerImage} alt="VR Box" />
                        </figure>
                    </div> */}
                </div>
            </div>
        </div>
        
        

            {/* Modal */}
            {watchVideo && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Video</h5>
                        <button type="button" className="btn-close close" onClick={handleClose}>
                            {/* <span>&times;</span> */}
                        </button>
                    </div>
                    <div className="modal-body">
                        <video width="100%" height="389px" autoPlay>
                            <source src={Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
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
            {watchVideo && <div className="modal-backdrop fade show"></div>}



        <section className="actions-area section-padding">
            <div className="container-fluid container-lg">
                <div className="row actions-one align-items-center">
                    <div className="col-md-5 col-lg-5 mb-2 mb-lg-0">
                        <div className="section-title text-start mb-0">
                            <h2 className="title">Why Remote Physios?</h2>
                            <div className="desc mb-0 mb-lg-4">
                                <p>We understand how challenging it can be to find the time for clinic visits or home physiotherapy sessions. Remote Physios brings personalized, evidence-based physiotherapy directly to your home, guided by experts through teleconsultations and IoT-enabled equipment. Whether you're recovering from surgery, managing chronic pain, or need elderly care, our innovative approach ensures you heal safely and effectively, without the need for travel.</p>
                            </div>
                            <Link to="javascript:void(0)" className="primary-button">
                                <span className="part front">Learn How It Works <span className="lsangleright icon"><FaChevronRight /></span></span>
                                <span className="part back">Learn How It Works <span className="lsangleright icon"><FaChevronRight /></span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 offset-md-1">
                        <figure className="action-image text-end">
                            {/* <img src={remotePhysio} className="bg-image" alt="" /> */}
                            <img src={remotePhysios} className="" alt="" /> 
                        </figure>
                    </div>
                </div>
                <div className="how-it-works row actions-two align-items-center flex-row-reverse">
                    <div className="col-md-5  col-lg-5 g-md-4 g-xl-5 offset-md-1 mb-5 mb-lg-0">
                        <div className="section-title text-start mb-0">
                            <h2 className="title">How It Works</h2>
                            <div className="desc mb-4">
                                <h5 className='theme-color-text fw-bold'>How Remote Physios Works</h5>
                            </div>
                            <ul className="settings-list">
                                <li>Book a consultation, schedule an online video assessment with one of our expert physiotherapists.
                                </li>
                                <li>Personalized Plan, we design a treatment protocol tailored to your specific condition.
                                </li>
                                <li>Equipment Delivery, receive IoT-enabled devices at your doorstep </li>
                                <li>Guided Sessions, our physiotherapists guide you remotely through each session, controlling the equipment and monitoring progress.
                                </li>
                            </ul>
                            <Link to="javascript:void(0)" className="primary-button">
                                <span className="part front">Learn More <span className="lsangleright icon"><FaChevronRight /></span></span>
                                <span className="part back">Learn More <span className="lsangleright icon"><FaChevronRight /></span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <figure className="action-image text-start">
                        <img src={product01} className="bg-image d-none d-lg-block" alt="" />
                        <img src={product01} className="w-100 d-md-block d-lg-none" alt="" />
                        <img src={product01} className="main-image d-none d-lg-block" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="feedback-area overflow-hidden section-padding" id="features-section">
            <div className="container-fluid container-lg">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-6 col-xl-6 z2">
                        <div className="section-title text-start white-title">
                            <h2 className="title">Emotional Storytelling </h2>
                            <div className="desc">
                                <p>Healing Stories from Our Patients</p>
                            </div>
                        </div>
                        <div className="row g-4 g-xl-5">
                            {/* <div className="col-md-6">
                                <div className="icon-box-1 white-box">
                                    <div className="icon"><span className="lsmotion"><FaGamepad />
                                    </span></div>
                                    <h3 className="title">360 Viewing Angle</h3>
                                    <div className="desc">
                                        <p>Lorem ipsum lor sit amets ectetur adipiscing eli sed do emod.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="icon-box-1 white-box row">
                                    
                                    <div className='col-10'>
                                        
                                        <h3 className="title">
                                            <span className='title-number'>
                                               1 
                                            </span>
                                            Story </h3>
                                        <div className="desc">
                                            <p>Mr. Sharma, 65, had been struggling with chronic back pain for years. Commuting to a clinic was not feasible, and his condition worsened. With Remote Physios, he received personalized care at home, using IoT-enabled equipment. Today, Mr. Sharma has regained his mobility and enjoys daily walks with his grandchildren."</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="icon-box-1 white-box row ms-5">
                                    
                                    <div className='col-12'>
                                        <h3 className="title">
                                            <span className='title-number'>
                                                 2 
                                            </span>  
                                            Story
                                            </h3>
                                        <div className="desc">
                                            <p>Anita, a busy corporate professional, was facing neck and shoulder pain due to long hours at her desk. Thanks to Remote Physios, she could schedule sessions at her convenience, without leaving home. Her pain has significantly reduced, and she continues her exercises regularly."</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="icon-box-1 white-box">
                                    <div className="icon"><span className="lstechnology"><GiVrHeadset />
                                    </span></div>
                                    <h3 className="title">High Resulation</h3>
                                    <div className="desc">
                                        <p>Lorem ipsum lor sit amets ectetur adipiscing eli sed do emod.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="feedback-image">
                            <img style={{width:"488px"}} src={customerFeedback} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="actions-area section-padding services-section">
            <div className="container-fluid container-lg">
                <div className="row actions-one align-items-center">
                    <div className="col-md-5 col-lg-5 mb-2 mb-lg-0">
                        <div className="section-title text-start mb-0">
                            <h2 className="title">Our Services</h2>
                            <div className="desc mb-4">
                                <h5 className='theme-color-text fw-bold'>Our Comprehensive Services</h5>
                            </div>
                            <ul className="settings-list">
                                <li>Post-operative rehabilitation</li>
                                <li>Chronic pain management</li>
                                <li>Elderly physiotherapy</li>
                               <li> Sports injury recovery</li>
                               <li> Workplace ergonomics and rehabilitation</li>

                            </ul>
                            <Link to="javascript:void(0)" className="primary-button">
                                <span className="part front">Explore Our Services <span className="lsangleright icon"><FaChevronRight /></span></span>
                                <span className="part back">Explore Our Services <span className="lsangleright icon"><FaChevronRight /></span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6  col-lg-6 offset-md-1">
                        <figure className="action-image text-start">
                            <img src={servicesImg} className="" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial-area" id="testimonial-section">
            <div className="container-fluid container-lg">
                <div className="row align-items-end">
                    <div className="col-lg-5 g-md-4 g-xl-5 section-padding">
                        <div className="section-title white-title text-start">
                            <h2 className="title mb-0">Testimonials</h2>
                            <p className='text-white' style={{fontSize:'15px'}}>Don't just take our word for it, hear directly from our patients.</p>
                        </div>
                        <div className="testimonial-slider swiper">
                            <Swiper className="mySwiper"
                                spaceBetween={30}
                                slidesPerView={1}
                                modules={[Autoplay]}  // Pass the modules in the Swiper component
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                speed={600} // Transition duration in milliseconds
                                style={{ transitionTimingFunction: 'linear' }} // Linear transition
                                pagination={{ clickable: false }}
                                navigation={false}
                                >
                                <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="rating-star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="desc">
                                                <p>“Remote Physios changed my life. I never thought I could recover from my knee surgery without visiting the clinic every day”
                                                </p>
                                            </div>
                                            <figure className="client-photo">
                                                <img src={client1} alt="" />
                                            </figure>
                                            <h4 className="title">Rohit</h4>
                                            <div className="position">Age-42 </div>
                                        </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <div className="rating-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="desc">
                                            <p>“Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut voluptates repudiandae sint et molestiae.”
                                            </p>
                                        </div>
                                        <figure className="client-photo">
                                            <img src={client2} alt="" />
                                        </figure>
                                        <h4 className="title">Helena Paitora</h4>
                                        <div className="position">Digital Marketer</div>
                                    </div>
                                </SwiperSlide>                            
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <div className="rating-star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="desc">
                                            <p>“Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut voluptates repudiandae sint et molestiae.”
                                            </p>
                                        </div>
                                        <figure className="client-photo">
                                            <img src={client3} alt="" />
                                        </figure>
                                        <h4 className="title">Helena Paitora</h4>
                                        <div className="position">Digital Marketer</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>    
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <figure className="testimonial-image">
                            <img src={testimonialImage} alt="" />
                            <img src={testimonialbg} className="testi-bg" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className='call-to-action'>
            <div className='container'>
                  <div className='row'>
                       <div className='col-md-7'>
                                <div className='section-title text-start mb-0'>
                                    <h2 className='title'>Call to Action </h2>
                                    <p className='desc'>Take the first step towards a healthier, pain-free life. Book your free consultation with our expert physiotherapists today and experience the future of home-based care</p>
                                    <div className=''>
                                        <Link to="javascript:void(0)" className="primary-button me-3">
                                            <span className="part front">Book Free Consultation <span className="lsangleright icon"><FaChevronRight /></span></span>
                                            <span className="part back">Book Free Consultation <span className="lsangleright icon"><FaChevronRight /></span></span>
                                        </Link>
                                        <Link to="javascript:void(0)" className="primary-button primary-button-2">
                                            <span className="part front">Contact Us for More Information <span className="lsangleright icon"><FaChevronRight /></span></span>
                                            <span className="part back">Contact Us for More Information <span className="lsangleright icon"><FaChevronRight /></span></span>
                                        </Link>
                                    </div>
                                </div>
                        </div> 
                        <div className='col-md-5 text-center justify-content-center align-items-center d-flex mt-4 mlg-0'>
                            <img style={{width:'245px'}} src={cta} />
                        </div>
                  </div>
            </div>
        </section>

      <Footer />
        
    </div>

    </div>
  );
};

export default Home;

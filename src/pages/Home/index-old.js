// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/images/theme-1/logo-w.png';
import LogoDark from '../../assets/images/theme-1/logo.png';
import customerFeedback from '../../assets/images/theme-2/customer-feedback.png';
import remotePhysio from '../../assets/images/theme-2/remotePhysio.webp';
import servicesImg from '../../assets/images/theme-2/services-img.png';
import client1 from '../../assets/images/theme-2/client-1.png';
import client2 from '../../assets/images/theme-2/client-2.png';
import client3 from '../../assets/images/theme-2/client-3.png';
import product01 from '../../assets/images/theme-2/product01.png';
import testimonialImage from "../../assets/images/theme-2/testimonial-image.png";
import testimonialbg from '../../assets/images/theme-2/testimonial-bg.png';
import cta from '../../assets/images/theme-2/cta.png';


import { FaHeart, FaUserAlt, FaPlay, FaChevronRight, FaGamepad ,FaStar  } from "react-icons/fa";
import { FaBasketShopping} from "react-icons/fa6";


const Home = () => {
    const [isSticky, setIsSticky] = useState(false); // State to manage the sticky class
  
    useEffect(() => {
      // Function to handle scroll
      const handleScroll = () => {
        if (window.scrollY > 300) { // Check if the scroll position is greater than 300
          setIsSticky(true); // Set sticky to true
        } else {
          setIsSticky(false); // Set sticky to false
        }
      };
  
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array ensures the effect runs once on mount
  
  return (
    <div>
       
    <div className="page-wrapper">
    <header className={`mainmenu-area ${isSticky ? "sticky" : ""}`}>
            <div className="mainmenu-area">
                <div className="container">
                    <div className="nav-row">
                        <div className="nav-logo">
                        {/* <FontAwesomeIcon icon={faApple} /> */}
                            <Link to="/" className="logo light-logo"><img src={LogoWhite}
                                    alt="" /></Link>
                            <Link to="/" className="logo dark-logo"><img src={LogoDark} alt="" /></Link>
                        </div>
                        <div className="nav-actions">
                            <Link to="javascript:void(0)" className="primary-button cirlce">
                                <span className="part front"><FaHeart /></span>
                                <span className="part back"><FaHeart /></span>
                            </Link>
                            <Link to="javascript:void(0)" className="primary-button cirlce">
                                <span className="part front"><FaUserAlt /></span>
                                <span className="part back"><FaUserAlt /></span>
                            </Link>
                            <Link to="javascript:void(0)" className="primary-button cirlce">
                                <span className="part front"><FaBasketShopping /></span>
                                <span className="part back"><FaBasketShopping /></span>
                            </Link>
                            <Link to="javascript:void(0)" className="primary-button cirlce toggle menu-toggle">
                                <span className="part front"><span className="ls-bar"></span></span>
                                <span className="part back"><span className="ls-close-line"></span></span>
                            </Link>
                        </div>
                        <nav className="menu-items">
                            <ul>
                                <li><Link className="active" to="/">Home</Link></li>
                                <li><Link to="/">About us</Link></li>
                                {/* <li><Link to="/about">About us</Link></li> */}
                                <li><Link to="/">Product</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    </header>        
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="header-content">
                            <h1 className="main-title">Personalized Physiotherapy, Delivered to Your Doorstep</h1>
                            <div className="desc">
                                <p>Transforming the way you heal with remote physiotherapy sessions and IoT-enabled devices, bringing comfort, convenience, and expert care to your home.</p>
                            </div>
                            <div className="header-actions">
                                <Link to="javascript:void(0)" className="primary-button white-button">
                                    <span className="part front">Book Your Free Consultation <span className="ls-angle-right2 ms-1"><FaChevronRight /></span></span>
                                    <span className="part back">Book Your Free Consultation <span className="ls-angle-right2 ms-1"><FaChevronRight /></span></span>
                                </Link>
                                <Link to="#" data-lity className="play-button ms-4"><span
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
        </header>
        <section className="actions-area section-padding">
            <div className="container">
                <div className="row actions-one align-items-center">
                    <div className="col-lg-5 g-md-4 g-xl-5 mb-5 mb-lg-0">
                        <div className="section-title text-start mb-0">
                            <h2 className="title">Why Remote Physio?</h2>
                            <div className="desc mb-4">
                                <p>We understand how challenging it can be to find the time for clinic visits or home physiotherapy sessions. Remote Physio brings personalized, evidence-based physiotherapy directly to your home, guided by experts through teleconsultations and IoT-enabled equipment. Whether you're recovering from surgery, managing chronic pain, or need elderly care, our innovative approach ensures you heal safely and effectively, without the need for travel.</p>
                            </div>
                            <Link to="javascript:void(0)" className="primary-button">
                                <span className="part front">Learn How It Works <span className="lsangleright icon"><FaChevronRight /></span></span>
                                <span className="part back">Learn How It Works <span className="lsangleright icon"><FaChevronRight /></span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <figure className="action-image text-end">
                            <img src={remotePhysio} className="bg-image" alt="" />
                            <img src={remotePhysio} className="main-image" alt="" /> 
                        </figure>
                    </div>
                </div>
                <div className="row actions-two align-items-center flex-row-reverse section-padding-top">
                    <div className="col-lg-5 g-md-4 g-xl-5 offset-lg-1 mb-5 mb-lg-0">
                        <div className="section-title text-start mb-0">
                            <h2 className="title">How It Works</h2>
                            <div className="desc mb-4">
                                <h5 className='theme-color-text fw-bold'>How Remote Physio Works</h5>
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
                    <div className="col-lg-6">
                        <figure className="action-image text-start">
                        <img src={product01} className="bg-image" alt="" />
                        <img src={product01} className="main-image" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="feedback-area overflow-hidden" id="features-section">
            <div className="container">
                <div className="row align-items-end flex-row-reverse">
                    <div className="col-xl-6 section-padding z2">
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
                                            <p>Mr. Sharma, 65, had been struggling with chronic back pain for years. Commuting to a clinic was not feasible, and his condition worsened. With Remote Physio, he received personalized care at home, using IoT-enabled equipment. Today, Mr. Sharma has regained his mobility and enjoys daily walks with his grandchildren."</p>
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
                                            <p>Anita, a busy corporate professional, was facing neck and shoulder pain due to long hours at her desk. Thanks to Remote Physio, she could schedule sessions at her convenience, without leaving home. Her pain has significantly reduced, and she continues her exercises regularly."</p>
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
                    <div className="col-xl-6">
                        <figure className="feedback-image">
                            <img src={customerFeedback} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="actions-area section-padding services-section">
            <div className="container">
                <div className="row actions-one align-items-center">
                    <div className="col-lg-5 g-md-4 g-xl-5 mb-5 mb-lg-0">
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
                    <div className="col-lg-6 offset-lg-1">
                        <figure className="action-image text-start">
                            <img src={servicesImg} className="bg-image" alt="" />
                            <span className='main-image'></span>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial-area" id="testimonial-section">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-5 g-md-4 g-xl-5 section-padding">
                        <div className="section-title white-title text-start">
                            <h2 className="title mb-0">Testimonials</h2>
                            <p className='text-white' style={{fontSize:'15px'}}>Don't just take our word for it, hear directly from our patients.</p>
                        </div>
                        <div className="testimonial-slider swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="rating-star">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
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
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="rating-star">
                                           <FaStar />
                                            <span className="star back"></span>
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
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="rating-star">
                                           <FaStar />
                                            <span className="star back"></span>
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
                                </div>
                            </div>
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
                        <div className='col-md-5 text-center'>
                            <img style={{width:'245px'}} src={cta} />
                        </div>
                  </div>
            </div>
        </section>
        <footer className="footer-area">
            <div className="container">
                <div className="row footer-top section-padding">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="footer-widget pe-lg-3 g-md-4 g-xl-5">
                            <Link to="/" className="footer-logo">
                                <img style={{width:'100px'}} src={LogoWhite} alt="Landshop" />
                            </Link>
                            <div className="desc">
                                <p>Temporibus autem quibusdam aut officiis debitis aut rerum necessitatibus saepde eveniet ut et voluptates.</p>
                            </div>
                            <ul className="social-menu">
                                <li><Link to="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="javascript:void(0)"><i class="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="javascript:void(0)"><i class="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
                        <div className="footer-widget">
                            <h4 className="widget-title">Product</h4>
                            <ul className="block-list">
                                <li><Link to="javascript:void(0)">Home </Link></li>
                                <li><Link to="javascript:void(0)">About Us</Link></li>
                                <li><Link to="javascript:void(0)">Services</Link></li>
                                <li><Link to="javascript:void(0)">Testimonials</Link></li>
                                <li><Link to="javascript:void(0)">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 mb-5 mb-lg-0">
                        <div className="footer-widget">
                            <h4 className="widget-title">Support</h4>
                            <ul className="block-list">
                                <li><Link to="javascript:void(0)">Demo@gmail.com</Link></li>
                                <li><Link to="javascript:void(0)">+91 9876543210</Link></li>
                                <li><Link to="javascript:void(0)">Terms & Condition</Link></li>
                                <li><Link to="javascript:void(0)">FAQ Questions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <h4 className="widget-title">Subscribe Newsletter</h4>
                            <div className="desc">
                                <p>Subscribe to our newsletter for health tips and updates
                                </p>
                            </div>
                            <form className="subscribe-form" id="subscribe-form">
                                <div className="form-group">
                                    <i class="fa-regular fa-envelope"></i>
                                    <input type="email" id="mc-email" name="EMAIL" className="input-control" placeholder="Enter your mail address" />
                                    <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                                </div>
                                <label></label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="copyrights">
                        <p>&copy;2023 All rights reserved. Powered by Remote Phisio</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    </div>
  );
};

export default Home;

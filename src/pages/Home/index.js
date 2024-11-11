// Home.js
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '../../componet/Header/index';
import Footer from '../../componet/Footer/index';
import ZendeskWidget from '../../ZendeskWidget/index';
import "swiper/css";
import { Autoplay } from 'swiper/modules'; // Import the modules properly
import customerFeedback from '../../assets/images/theme-2/customer-feedback.png';
import remotePhysios from '../../assets/images/theme-2/remotePhysio.png';
import servicesImg from '../../assets/images/theme-2/services-img.png';
import client1 from '../../assets/images/theme-2/client-1.png';
import client2 from '../../assets/images/theme-2/client-2.png';
import client3 from '../../assets/images/theme-2/client-3.png';
import defaultImg from '../../assets/images/theme-2/defaultImg.png';

import product01 from '../../assets/images/theme-2/product01.png';
import testimonialImage from "../../assets/images/theme-2/testimonial-image.png";
import testimonialbg from '../../assets/images/theme-2/testimonial-bg.png';
import cta from '../../assets/images/theme-2/cta.png';
import Video from '../../assets/video/sweta.mp4';
// import swetafd from '../../assets/images/theme-2/'



import { FaPlay, FaChevronRight } from "react-icons/fa";

//****/
const testimonialsData = [
    {
        id: 1,
        name: "Sweta Jain",
        position: "Patient",
        photo: client2,
        rating: 5,
        has_video: "true",
        note: "I belong to Jabalpur and having problem of meniscus tear as well as ligament tear. It’s really tough for me to spend more than an hour daily to go to physiotherapy center for long time. With the help of Dr. Anant ji and their IOT based machinery, I can easily manage my daily routine and physiotherapy simultaneously. THANKX to the whole team for providing this innovative technique of machinery which helps me a lot.",


    },
    {
        id: 2,
        name: "Smita Modi Jain",
        position: "Patient",
        photo: defaultImg,
        rating: 5,
        note: "I am Smita Jain ,residing in Thane (Maharashtra) I was suffering from chronic pain from Calcaneal Spur/ Heel spur. Walking and going out was difficult and painful for me,so I came to know about Physiqure and their online physio sessions.Dr.Anubha & Dr.Anant diagnose and explain the root causes of my issues and provided me with a clear understanding of my condition and the line of treatment.The beauty of Physiqure is bringing physiotherapy to your doorstep. The best part was modalities, they send the machines at home and train you or ur family member for operating the machines. So it’s a complete online Physiotherapy sessions at ur convenience and ur place ,providing  immediate relief and tangible results.Dr.Deepti from Physiqure was my physiotherapist.She is excellent and helped me in regaining strength and mobility.  I would recommend Physiqure as they have excellent & experienced team of Physiotherapists .",
    },
    {
        id: 3,
        name: "Apurva Singhai",
        position: "Patient",
        photo: client1,
        rating: 5,
        note: "I am Smita Jain, residing in Thane (Maharashtra). I was suffering from chronic pain from Calcaneal Spur/Heel spur. Walking and going out was difficult and painful for me, so I came to know about PhysiQure and their online physio sessions. Dr. Anubha & Dr. Anant diagnose and explain the root causes of my issues and provided me with a clear understanding of my condition and the line of treatment. The beauty of PhysiQure is bringing physiotherapy to your doorstep. The best part was modalities, they send the machines at home and train you or your family member for operating the machines. So it's a complete online Physiotherapy session at your convenience.",
    },
];



const Home = () => {

    //**** */
    const swiperRef = useRef(null);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const [expandedNotes, setExpandedNotes] = useState({});
    //*** */

    const [watchVideo, setShow] = useState(false);
    // Third modal state with a unique name
    const [fiveModal, setFiveModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // Handlers for the Third modal
    const handleCloseFiveModal = () => setFiveModal(false);
    const handleShowFiveModal = () => setFiveModal(true);

    const [isExpanded, setIsExpanded] = useState(false)
    const [isExpanded2, setIsExpanded2] = useState(false)
    const [isExpanded3, setIsExpanded3] = useState(false)


    const toggleNote3 = (id) => {

        if (swiperRef.current) {

            if (isAutoplayPaused) {
                swiperRef.current.autoplay.start(); // Resume autoplay
            } else {
                swiperRef.current.autoplay.stop(); // Pause autoplay
            }
            setIsAutoplayPaused(!isAutoplayPaused); // Toggle state
        }
        setExpandedNotes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
        setIsExpanded3(prevState => !prevState);
    };


    return (
        <div>

            <div className="page-wrapper">
                <Header />
                <div className="header-area">
                    <div className="container-fluid container-lg">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-lg-7 col-xxl-6">
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
                                    {/* <video width="100%" height="389px" autoPlay>
                                <source src={"Video"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                                    <iframe width="100%" height="315"
                                        src="https://www.youtube.com/embed/qB1ny63gzQ0?autoplay=1&mute=1"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen>
                                    </iframe>

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
                                    <div className="desc mb-0">
                                        <p>We understand how challenging it can be to find the time for clinic visits or home physiotherapy sessions. Remote Physios brings personalized, evidence-based physiotherapy directly to your home, guided by experts through teleconsultations and IoT-enabled equipment. Whether you're recovering from surgery, managing chronic pain, or need elderly care, our innovative approach ensures you heal safely and effectively, without the need for travel.</p>
                                    </div>
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

                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <figure className="text-start">
                                    {/* <img src={product01} className="bg-image d-none d-lg-block" alt="" />
                        <img src={product01} className="w-100 d-md-block d-lg-none" alt="" /> */}
                                    <img src={product01} className="main-image d-lg-block" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feedback-area overflow-hidden section-padding" id="features-section">
                    <div className="container-fluid container-lg">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-md-6 col-xl-6 z2">
                                <div className="section-title text-start white-title mb-0">
                                    <h2 className="title">Impact we Make</h2>
                                    <div className="desc mb-4">
                                        <h5 className='fw-bold'>Healing Stories from Our Patients</h5>
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
                                    <img style={{ width: "488px" }} src={customerFeedback} alt="" />
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
                                        {/* <li>Post-operative rehabilitation</li>
                                <li>Chronic pain management</li>
                                <li>Elderly physiotherapy</li>
                                <li> Sports injury recovery</li>
                                <li> Workplace ergonomics and rehabilitation</li> */}
                                        <li>Corporate Employee Wellness </li>
                                        <li>Elder Care Physiotherapy </li>
                                        <li>Joints pain and Stiffness </li>
                                        <li>Generalized Muscular Pains </li>
                                        <li>Post Surgical Recovery </li>
                                        <li>Recovery from Neurological conditions </li>
                                        <li>Cardiac Rehabilitation </li>
                                        <li>Pulmonary Rehabilitation </li>
                                        <li>Endurance Training </li>
                                        <li>Stretch your Muscles </li>
                                        <li>Balance and Coordination Training </li>
                                    </ul>
                                    <Link to="/services" className="primary-button mt-5">
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
                            <div className="col-lg-7 g-md-4 g-xl-7 section-padding">
                                <div className="section-title white-title text-start">
                                    <h2 className="title mb-0">Testimonials</h2>
                                    <p className='text-white' style={{ fontSize: '15px' }}>Don't just take our word for it, hear directly from our patients.</p>
                                </div>
                                <div className="testimonial-slider swiper">
                                    <Swiper
                                        className="mySwiper"
                                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        modules={[Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            disableOnInteraction: false,
                                            delay: 3000,
                                        }}
                                        speed={600}
                                        style={{ transitionTimingFunction: 'linear' }}
                                        pagination={{ clickable: false }}
                                        navigation={false}
                                    >
                                        {testimonialsData.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="testimonial-item">
                                                    <div className="rating-star">
                                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                            <i className="fas fa-star" key={i}></i>
                                                        ))}
                                                    </div>
                                                    <div className="desc">
                                                        <div className="note">
                                                            <div className={`note-content ${expandedNotes[testimonial.id] ? 'expanded' : 'collapsed'}`}>
                                                                {testimonial.note}
                                                            </div>

                                                            {testimonial.note.length > 300 && (

                                                                <button className='btn btn-primary mt-3' onClick={() => toggleNote3(testimonial.id)}>
                                                                    {expandedNotes[testimonial.id] ? 'Read less' : 'Read more'}
                                                                </button>)
                                                            }

                                                            {/* <button  className='btn btn-primary mt-3' onClick={() => toggleNote3(testimonial.id)}>
                                                                {expandedNotes[testimonial.id] ? 'Read less' : 'Read more'}
                                                                
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                    <figure className="client-photo">
                                                        <img src={testimonial.photo} alt={testimonial.name} />
                                                    </figure>
                                                    <h4 className="title">{testimonial.name}</h4>
                                                    <div className="position">{testimonial.position}</div>

                                                    {testimonial.has_video === "true" && (
                                                        <Link onMouseLeave={handleShowFiveModal} className="play-button ms-4">
                                                            <span className="play-icon"><FaPlay /></span>
                                                        </Link>
                                                    )}


                                                    {/* <Link onMouseLeave={handleShowFiveModal} className="play-button ms-4">
                                                        <span className="play-icon"><FaPlay /></span>
                                                        has_video
                                                    </Link> */}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 d-none d-lg-block">
                                <figure className="testimonial-image">
                                    <img src={testimonialImage} alt="" className='d-none' />
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
                                    <h2 className='title'>Ready to Begin Your Recovery</h2>
                                    <p className='desc'>Take the first step towards a healthier, pain-free life. Book your free consultation with our expert physiotherapists today and experience the future of home-based care</p>
                                    <div className='mt-5'>
                                        <Link to="/appointment" className="primary-button me-3">
                                            <span className="part front">Appointment <span className="lsangleright icon"><FaChevronRight /></span></span>
                                            <span className="part back">Appointment <span className="lsangleright icon"><FaChevronRight /></span></span>
                                        </Link>
                                        <Link to="https://remotephysios.in/remote/home" className="primary-button me-3">
                                            <span className="part front">Self Assessment <span className="lsangleright icon"><FaChevronRight /></span></span>
                                            <span className="part back">Self Assessment <span className="lsangleright icon"><FaChevronRight /></span></span>
                                        </Link>
                                        <Link to="https://wa.me/+917470478888?text=Hello%20there!" className="primary-button primary-button-2">
                                            <span className="part front">Whatsapp Now <span className="lsangleright icon"><FaChevronRight /></span></span>
                                            <span className="part back">Whatsapp Now <span className="lsangleright icon"><FaChevronRight /></span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5 text-center justify-content-center align-items-center d-flex mt-4 mlg-0'>
                                <img style={{ width: '245px' }} src={cta} />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="newsletter-section">
                    <div class="newsletter-container">
                        <h2>Subscribe Newsletter</h2>
                        <p>Subscribe to our newsletter for health tips and updates</p>
                        <form class="newsletter-form">
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </section>

                {/*FIVE */}
                {fiveModal && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Review</h5>
                                    <button type="button" className="btn-close close" onClick={handleCloseFiveModal}>
                                        {/* <span>&times;</span> */}
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <video width="100%" height="auto" controls autoPlay muted>
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <iframe width="100%" height="315" 
                                            src="https://www.youtube.com/embed/qB1ny63gzQ0?autoplay=1&mute=1" 
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            allowfullscreen>
                                        </iframe> */}

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Backdrop */}
                {fiveModal && <div className="modal-backdrop fade show"></div>}
                {/**FIVE-END**/}

                <Footer />
                <ZendeskWidget />

            </div>

        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import AboutSmall from '../../assets/images/theme-2/AboutSmall.svg';
import Aboutbg from '../../assets/images/theme-2/about-img.jpg'; 

import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import corporateWellness from '../../assets/images/theme-2/corporateWellness.png';
import ZendeskWidget from '../../ZendeskWidget/index';



const servicesCorporate = () => {

    return (
        <>
            <Header />

<div className='about-bg'>
    <img className='d-sm-block d-md-none' src={AboutSmall} />
    <img className='d-sm-none d-md-block d-none' src={Aboutbg} />
</div>

            <div className='service my-5'>
                <div class="container">
                    <div className='text-center mb-5'>
                        <h1>Remote Physio Services</h1>
                        <p>Bringing Health & Wellness to Your Home or Workplace</p>
                    </div>
                    {/* <!-- Corporate Employee Wellness --> */}
                    <div class="service-section">
                        <section class="">
                            <h2 className='my-4'>1. Corporate Employee Wellness</h2>
                            <h3 className=''>Is Your Desk Job Taking a Toll on Your Health?</h3>
                            <p>
                                Sedentary work environments can lead to back pain, neck strain, and poor posture, affecting not just your physical health but also your productivity. You might notice these symptoms, but finding the time to visit a physiotherapy clinic feels impossible.
                            </p>

                            <h3>"Remote Physio Brings Health & Wellness to Your Workplace"</h3>
                            <p>
                                At Remote Physio, we understand that balancing work and health can be difficult. Our Corporate Employee Wellness Program is designed to offer convenient, effective physiotherapy solutions directly to your employees—whether they're in the office or at home. From personalized care to ergonomic advice, we create wellness programs that fit into the busy schedules of corporate employees.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Virtual physiotherapy assessments and treatment plans for each employee.</li>
                                <li>Expert ergonomic advice to improve posture and reduce strain.</li>
                                <li>Health seminars and wellness camps to educate employees on preventing musculoskeletal issues.</li>
                                <li>Regular monitoring and adjustments to ensure long-term health improvements.</li>
                            </ul>
                            <h4> Improve Your Team’s Health & Productivity Today </h4>
                            <p>Invest in the health of your workforce. Contact us to schedule a wellness seminar or arrange personalized assessments for your employees.</p>
                        </section>
                        <div className='mt-5 text-center'><img width="500px" src={corporateWellness} /></div>
                    </div>


                </div>
            </div>

            <Footer />
            <ZendeskWidget />
        </>
    )
};

export default servicesCorporate;
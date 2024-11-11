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
                    
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>3. Joint Pain and Stiffness</h2>
                            <h3>"Does Joint Pain Hold You Back from Enjoying Life?"</h3>
                            <p>
                                Whether it's your knees, shoulders, or hips, joint pain and stiffness can make everyday tasks feel unbearable. But finding time to seek professional care may seem overwhelming.
                            </p>

                            <h3>"Relieve Joint Pain from the Comfort of Your Home"</h3>
                            <p>
                                Remote Physio provides specialized treatment for joint pain and stiffness. Our certified physiotherapists create personalized plans that improve joint mobility and alleviate pain, all without requiring a clinic visit. With our remote services, you can begin your path to relief and recovery from wherever you are.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Comprehensive assessments to identify the cause of joint pain.</li>
                                <li>Personalized treatment plans targeting specific joints and areas of stiffness.</li>
                                <li>Strengthening exercises and joint mobilization techniques to improve function.</li>
                                <li>Use of IoT devices to track your progress in real-time.</li>
                            </ul>

                            <h4>“Don’t Let Joint Pain Limit You”</h4>
                            <p>Take the first step toward pain-free movement. Contact us to schedule a consultation.</p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
            <ZendeskWidget />
        </>
    )
};

export default servicesCorporate;
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
                    {/* Pulmonary Rehabilitation  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>8. Pulmonary Rehabilitation</h2>
                            <h3>"Struggling with Chronic Lung Conditions?"</h3>
                            <p>
                                If you’re living with COPD, asthma, or other chronic lung conditions, daily tasks can feel overwhelming due to shortness of breath. But help is within reach.
                            </p>

                            <h3>"Breathe Easier with Remote Pulmonary Rehab"</h3>
                            <p>
                                Remote Physio offers tailored pulmonary rehabilitation plans designed to help you improve lung function and manage chronic symptoms. From breathing exercises to endurance training, our program helps you regain control over your breathing and daily life.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized breathing exercises to increase lung capacity.</li>
                                <li>Aerobic conditioning to improve stamina and reduce breathlessness.</li>
                                <li>Ongoing support and guidance from physiotherapists.</li>
                                <li>Symptom management and lifestyle education.</li>
                            </ul>

                            <h4>Take a Deep Breath—Help is Here</h4>
                            <p>Start breathing easier with our remote pulmonary rehab services. Schedule your consultation today.</p>
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
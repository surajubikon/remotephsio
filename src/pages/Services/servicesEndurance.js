import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import AboutSmall from '../../assets/images/theme-2/AboutSmall.svg';
import Aboutbg from '../../assets/images/theme-2/about-img.jpg';

import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
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
                    {/* Endurance Training  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>9. Endurance Training</h2>
                            <h3>"Want to Build Endurance for Better Performance?"</h3>
                            <p>
                                Whether you’re recovering from an illness or preparing for an athletic event, endurance training is essential to improve your stamina and overall health.
                            </p>

                            <h3>"Build Strength and Stamina with Remote Physio’s Endurance Training"</h3>
                            <p>
                                Our endurance training program is designed to help you gradually increase your stamina and cardiovascular fitness, allowing you to excel in your daily life and sports activities. With real-time progress monitoring, our program ensures safe, effective results.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Customized cardiovascular exercises suited to your fitness goals.</li>
                                <li>Gradual progression to build strength and endurance.</li>
                                <li>Continuous tracking to ensure safe progress.</li>
                                <li>Nutrition and lifestyle guidance to support your training.</li>
                            </ul>

                            <h4>Boost Your Endurance Today</h4>
                            <p>Build stamina and improve your health. Schedule your endurance training consultation now.</p>
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
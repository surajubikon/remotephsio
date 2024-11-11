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
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>4. Generalized Muscular Pains</h2>
                            <h3>"Is Persistent Muscle Pain Affecting Your Daily Life?"</h3>
                            <p>
                                Muscle pain and tension can result from overuse, stress, or injuries. You might ignore the discomfort, but without proper care, the pain could worsen.
                            </p>

                            <h3>"Target and Treat Muscular Pain with Remote Physio"</h3>
                            <p>
                                At Remote Physio, we provide effective treatment for generalized muscle pain. Through personalized assessments and remote therapy, we develop plans to relieve tension, improve strength, and restore normal function. You don’t need to leave your home to get the care you deserve.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Initial assessments to understand your muscular pain.</li>
                                <li>Personalized stretching and strengthening routines to relieve tension.</li>
                                <li>Progress tracking to ensure continuous improvement.</li>
                                <li>Support from certified physiotherapists throughout the process.</li>
                            </ul>

                            <h4>Say Goodbye to Muscle Pain Today</h4>
                            <p>Find relief from muscular pain without leaving your home. Schedule your consultation now.</p>
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
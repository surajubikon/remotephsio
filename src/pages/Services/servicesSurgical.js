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
                   
                    {/* <!-- Post-Surgical Recovery --> */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>5. Post-Surgical Recovery</h2>
                            <h3>"Recovering from Surgery? Struggling to Get Back on Your Feet?"</h3>
                            <p>
                                Surgery is just the first step in your recovery journey. The next challenge is regaining strength, mobility, and independence. But traveling for post-surgical therapy can be exhausting.
                            </p>

                            <h3>"Recover Safely and Comfortably at Home"</h3>
                            <p>
                                Remote Physio’s Post-Surgical Recovery Program is tailored to help you rebuild strength and mobility after surgery. Our certified physiotherapists develop custom rehabilitation plans to ensure you recover safely and efficiently, all from the comfort of your home.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized rehabilitation programs based on your surgery and recovery goals.</li>
                                <li>Gradual strengthening exercises to rebuild mobility and function.</li>
                                <li>IoT-enabled devices to monitor your progress remotely.</li>
                                <li>Continuous support from experienced physiotherapists.</li>
                            </ul>

                            <h4>Begin Your Journey to Full Recovery</h4>
                            <p>Recover safely at home with Remote Physio. Book your post-surgical consultation today.</p>
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
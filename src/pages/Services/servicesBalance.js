import React, { useState } from 'react';
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
                    {/* Balance and Coordination Training  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>11. Balance and Coordination Training</h2>
                            <h3>"Worried About Losing Your Balance?"</h3>
                            <p>
                                Maintaining balance and coordination is key to preventing falls and staying active. If you’ve noticed instability in your movements, it’s time to take action.
                            </p>

                            <h3>"Strengthen Your Balance and Coordination with Remote Physio"</h3>
                            <p>
                                Our Balance and Coordination Training program is designed to improve your stability, mobility, and confidence. Through personalized exercises, we help you build strength and reduce your risk of falls, ensuring you stay safe and independent.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized balance and coordination exercises.</li>
                                <li>Gait training to improve stability and walking ability.</li>
                                <li>Strengthening exercises to support balance and prevent falls.</li>
                                <li>Ongoing monitoring to track your progress.</li>
                            </ul>

                            <h4>Stay Steady on Your Feet</h4>
                            <p>Improve your balance and coordination today. Book your consultation with Remote Physio.</p>
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
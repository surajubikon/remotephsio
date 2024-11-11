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
                    {/* Recovery from Neurological Conditions  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>6. Recovery from Neurological Conditions</h2>
                            <h3>"Facing Mobility Challenges Due to a Neurological Condition?"</h3>
                            <p>
                                Conditions like stroke, Parkinson’s disease, or multiple sclerosis can severely impact your movement, coordination, and balance. But you don’t have to face these challenges alone.
                            </p>

                            <h3>"Regain Function and Independence with Remote Physio"</h3>
                            <p>
                                Remote Physio offers specialized rehabilitation for individuals recovering from neurological conditions. Our programs are designed to restore mobility, improve coordination, and help you regain control over your body, all from the comfort of your home.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Comprehensive assessments to understand your specific challenges.</li>
                                <li>Personalized exercise plans targeting strength, balance, and coordination.</li>
                                <li>Gait training and mobility exercises to restore function.</li>
                                <li>Ongoing support from compassionate, experienced physiotherapists.</li>
                            </ul>

                            <h4>Reclaim Your Independence</h4>
                            <p>Let Remote Physio help you regain control of your mobility. Schedule your neurological recovery assessment today.</p>
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
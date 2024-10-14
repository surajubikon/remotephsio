import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import corporateWellness from '../../assets/images/theme-2/corporateWellness.png';


const servicesCorporate = () => {

    return (
        <>
            <Header />
            <div className='faq-bg'></div>

            <div className='service my-5'>
                <div class="container">
                    <div className='text-center mb-5'>
                        <h1>Remote Physio Services</h1>
                        <p>Bringing Health & Wellness to Your Home or Workplace</p>
                    </div>
                    {/* <!-- Corporate Employee Wellness --> */}
                    
                    <div className='service-section'>

                        <section>
                            <h2 className='my-4'>2. Elder Care Physiotherapy</h2>
                            <h3>Are You or Your Loved Ones Struggling with Mobility?</h3>
                            <p>
                                As we grow older, maintaining mobility becomes increasingly challenging. Joint stiffness, muscle weakness, and balance issues can make even daily tasks difficult. Traditional physiotherapy may feel out of reach, especially if mobility is already limited.
                            </p>

                            <h3>"Empowering Seniors to Stay Active and Independent"</h3>
                            <p>
                                Remote Physio offers elder care physiotherapy services that allow seniors to receive personalized treatment from the comfort of their homes. We focus on improving mobility, strength, and coordination, helping elderly individuals stay active, independent, and healthy.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Safe, personalized exercise programs to strengthen muscles and improve mobility.</li>
                                <li>Balance and coordination training to prevent falls and injuries.</li>
                                <li>Compassionate support and guidance for both seniors and caregivers.</li>
                                <li>Regular check-ins and progress monitoring to ensure the best care.</li>
                            </ul>

                            <h4>Keep Moving with Remote Physio’s Elder Care</h4>
                            <p>Help yourself or your loved ones stay active and independent. Schedule a consultation today.</p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
};

export default servicesCorporate;
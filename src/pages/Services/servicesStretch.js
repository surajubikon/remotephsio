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
                    {/* Stretch Your Muscles  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>10. Stretch Your Muscles</h2>
                            <h3>"Feeling Tight and Stiff?"</h3>
                            <p>
                                Muscle stiffness and tightness can limit your range of motion and increase your risk of injury. Stretching is a simple yet essential way to improve flexibility and prevent discomfort.
                            </p>

                            <h3>"Improve Flexibility and Reduce Tension with Remote Physio"</h3>
                            <p>
                                Our Stretch Your Muscles program provides personalized stretching routines to help you improve flexibility, reduce muscle tension, and prevent injuries. With the guidance of certified physiotherapists, you’ll learn proper stretching techniques that fit into your daily routine.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized stretching routines based on your needs.</li>
                                <li>Safe, effective techniques to improve flexibility.</li>
                                <li>Real-time guidance via video consultations.</li>
                                <li>Regular progress checks to ensure continuous improvement.</li>
                            </ul>

                            <h4>Stretch Your Way to Better Flexibility</h4>
                            <p>Start feeling looser and more flexible. Schedule your stretching consultation today.</p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
};

export default servicesCorporate;
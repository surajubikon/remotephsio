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
                    {/* Cardiac Rehabilitation  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>7. Cardiac Rehabilitation</h2>
                            <h3>"Recovering from a Heart Attack or Heart Surgery?"</h3>
                            <p>
                                Post-heart surgery or a heart attack, rehabilitation is critical for restoring your strength and preventing further complications. But traveling to a clinic for care can feel overwhelming.
                            </p>

                            <h3>"Restore Heart Health with Home-Based Cardiac Rehab"</h3>
                            <p>
                                Remote Physio’s Cardiac Rehabilitation Program helps patients safely rebuild their cardiovascular strength through customized, monitored exercise plans. Our remote therapy allows you to recover at your own pace while still under the guidance of certified professionals.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Cardiovascular exercises designed to improve heart health.</li>
                                <li>Continuous heart monitoring and progress tracking through IoT devices.</li>
                                <li>Lifestyle guidance, including diet and stress management.</li>
                                <li>Safe and supportive recovery under the supervision of trained physiotherapists.</li>
                            </ul>

                            <h4>Start Your Heart Recovery Journey</h4>
                            <p>Get the care you need at home. Schedule your cardiac rehab consultation today.</p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
};

export default servicesCorporate;
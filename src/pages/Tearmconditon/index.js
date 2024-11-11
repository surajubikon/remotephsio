import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AboutSmall from '../../assets/images/theme-2/AboutSmall.svg';
import Aboutbg from '../../assets/images/theme-2/about-img.jpg'; 
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import ZendeskWidget from '../../ZendeskWidget/index';

const Tearmconditon = () => {
   
    return (
      <>
        <Header />  

        <div className='about-bg'>
            <img className='d-sm-block d-md-none' src={AboutSmall} />
            <img className='d-sm-none d-md-block d-none' src={Aboutbg} />
        </div>
        <div class="terms-container">
          <header class="terms-header">
              <h1>Terms and Conditions</h1>
              <p><strong>Effective Date:</strong> 01 Oct 2024</p>
          </header>

        <div class="terms-content">
            <section id="acceptance">
                <h2>1. Acceptance of Terms</h2>
                <p>By booking a session, accessing our website, or using our IoT-enabled devices and services, you agree to these Terms and all applicable laws. If you do not agree to these Terms, please do not use our services.</p>
            </section>

            <section id="service-overview">
                <h2>2. Service Overview</h2>
                <p>Remote Physios provides Remote Physiotherapy sessions using IoT devices and certified physiotherapists...</p>
            </section>

            <section id="booking-process">
                <h2>3. Booking Process</h2>
                <ul>
                    <li><strong>Consultation:</strong> To begin using our services, you must book an initial consultation via our website...</li>
                    <li><strong>Personalized Treatment Plan:</strong> After the consultation...</li>
                   

                </ul>
            </section>

            <section id="usage-iot">
                <h2>4. Usage of IoT Devices</h2>
                <p>IoT devices provided by Remote Physios must be used according to the instructions provided...</p>
            </section>

            <section id="payment">
                <h2>5. Payment and Fees</h2>
                <p>You are required to pay fees for consultations, treatment sessions, and IoT device rental as outlined in our pricing structure...</p>
            </section>

            <section id="responsibilities">
                <h2>6. Patient Responsibilities</h2>
                <p>Accurate Information: You agree to provide accurate and complete health information during consultations and follow the treatment plan as prescribed by your physiotherapist...</p>
            </section>

            <section id="limitation-liability">
                <h2>7. Limitation of Liability</h2>
                <p>Remote Physios provides physiotherapy services and tools intended to assist in recovery, rehabilitation, and pain management...</p>
            </section>

            <section id="indemnification">
                <h2>8. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Remote Physios, its management, employees...</p>
            </section>

            <section id="medical-disclaimer">
                <h2>9. Medical Disclaimer</h2>
                <p>Remote Physios is a physiotherapy service, not a medical service provider...</p>
            </section>

            <section id="data-privacy">
                <h2>10. Data Privacy</h2>
                <p>Your privacy is important to us. Any personal information or health data you provide will be handled in accordance with our Privacy Policy...</p>
            </section>

            <section id="termination">
                <h2>11. Termination of Services</h2>
                <p>Remote Physios reserves the right to terminate your access to our services if you violate these Terms...</p>
            </section>

            <section id="governing-law">
                <h2>12. Governing Law</h2>
                <p>These Terms and your use of Remote Physios services will be governed by and construed in accordance with the laws of India...</p>
            </section>

            <section id="changes-to-terms">
                <h2>13. Changes to Terms</h2>
                <p>Remote Physios reserves the right to modify these Terms at any time. We will notify you of any significant changes by posting them on our website...</p>
            </section>

            <section id="contact">
                <h2>14. Contact Us</h2>
                <p>If you have any questions regarding these Terms or need assistance with our services, please contact us at:</p>
                <p><strong>Email:</strong> Contact@remotephysios.com<br />
                <strong>Phone:</strong> +91 747-047-8888<br />
                <strong>Address:</strong> DK 2 / 373 Danish Kunj Kolar Road Bhopal 462042 MP India</p>
            </section>
        </div>
    </div>

        <Footer />
        <ZendeskWidget />
      </>
    )  
};

export default Tearmconditon;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
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
        <div className="disclaimer-container">
        <header className="disclaimer-header">
            <h1>Disclaimer</h1>
            <p><strong>Effective Date:</strong> 01 Oct 2024</p>
        </header>

        <div className="disclaimer-content">
            <section id="introduction">
                <p>By using the Remote Physios website, services, and IoT-enabled devices, you acknowledge and agree to the following disclaimer. Please read this carefully before accessing or using any of our services.</p>
            </section>

            <section id="general-info">
                <h2>1. General Information</h2>
                <ul>
                    <li>Remote Physios provides online Physiotherapy consultations and personalized treatment plans through certified Physiotherapists.</li>
                    <li>Our services do not replace in-person medical consultations or treatments by a licensed healthcare professional.</li>
                </ul>
            </section>

            <section id="not-a-substitute">
                <h2>2. Not a Substitute for Professional Medical Advice</h2>
                <ul>
                    <li>Always seek the advice of a physician or other qualified health provider for medical conditions before beginning any treatment program.</li>
                    <li>If you experience sudden or severe pain, seek immediate in-person medical attention.</li>
                </ul>
            </section>

            <section id="use-of-devices">
                <h2>3. Use of IoT-Enabled Devices</h2>
                <ul>
                    <li>Remote Physios provides IoT-enabled devices for home-based care, which must be used according to the provided instructions.</li>
                    <li>Improper use of these devices may result in injury or damage. Remote Physios is not responsible for harm caused by misuse.</li>
                </ul>
            </section>

            <section id="no-guarantees">
                <h2>4. No Guarantees of Specific Outcomes</h2>
                <ul>
                    <li>Remote Physios makes no guarantees regarding the results of any treatment or use of IoT devices. Outcomes may vary.</li>
                </ul>
            </section>

            <section id="limitation-liability">
                <h2>5. Limitation of Liability</h2>
                <ul>
                    <li>Remote Physios is not liable for any damages arising from the use of our website, services, or devices.</li>
                    <li>We are not responsible for injuries or health issues arising from misuse of IoT devices, failure to follow instructions, or delays in seeking medical care.</li>
                </ul>
            </section>

            <section id="use-of-website">
                <h2>6. Use of Website</h2>
                <ul>
                    <li>Your use of the Remote Physios website and services is at your own risk. The website is provided on an "as-is" basis without warranties.</li>
                </ul>
            </section>

            <section id="health-safety">
                <h2>7. Health and Safety</h2>
                <ul>
                    <li>It is your responsibility to provide accurate and complete health information during consultations to receive an effective treatment plan.</li>
                    <li>Remote Physios is not responsible for complications arising from undisclosed medical conditions.</li>
                </ul>
            </section>

            <section id="external-links">
                <h2>8. External Links</h2>
                <p>The Remote Physios website may contain links to third-party websites. We are not responsible for the content, services, or privacy practices of external sites.</p>
            </section>

            <section id="changes-disclaimer">
                <h2>9. Changes to the Disclaimer</h2>
                <p>Remote Physios reserves the right to update this Disclaimer at any time. Changes will be posted on this page with the updated effective date.</p>
            </section>

            <section id="contact-info">
                <h2>10. Contact Information</h2>
                <p>If you have any questions or concerns about this Disclaimer, please contact us at:</p>
                <p><strong>Email:</strong> contact@remotephysios.com<br />
                <strong>Phone:</strong> +91 747-047-8888</p>
            </section>
        </div>
    </div>

        <Footer />
        <ZendeskWidget />
      </>
    )  
};

export default Tearmconditon;
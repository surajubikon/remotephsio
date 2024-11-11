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
        <div className="privacy-container">
        <header className="privacy-header">
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> 01 Oct 2024</p>
        </header>

        <div className="privacy-content">
            <section id="introduction">
                <p>At Remote Physios, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and safeguard your data when you use our website and services, including our IoT-enabled Physiotherapy devices. By accessing our services, you agree to this Privacy Policy.</p>
            </section>

            <section id="information-we-collect">
                <h2>1. Information We Collect</h2>
                <p>We collect various types of personal information to provide you with the best Physiotherapy experience. This includes:</p>
                <h6>a. Personal Information:</h6>
                <ul>
                    <li>Name, Contact Information, and Address</li>
                    <li>Payment Information</li>
                    <li>Health Information</li>
                </ul>
                <h6>b. Usage Data:</h6>
                <ul>
                    <li>Device Data</li>
                    <li>Website Analytics</li>
                </ul>
            </section>

            <section id="how-we-use-info">
                <h2>2. How We Use Your Information</h2>
                <p>We use your personal information for the following purposes:</p>
                <ul>
                    <li>To Provide Services</li>
                    <li>Payment Processing</li>
                    <li>Communication</li>
                    <li>Improvement of Services</li>
                    <li>Legal Compliance</li>
                </ul>
            </section>

            <section id="data-sharing">
                <h2>3. Data Sharing</h2>
                <p>We only share your personal information with trusted third parties in the following cases:</p>
                <ul>
                    <li>Healthcare Providers</li>
                    <li>Service Providers</li>
                    <li>Legal Requirements</li>
                </ul>
            </section>

            <section id="data-protection">
                <h2>4. How We Protect Your Information</h2>
                <p>We take the security of your data very seriously. We implement the following safeguards:</p>
                <ul>
                    <li>Data Encryption</li>
                    <li>Access Control</li>
                    <li>Regular Audits</li>
                </ul>
            </section>

            <section id="your-rights">
                <h2>5. Your Rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                    <li>Access</li>
                    <li>Correction</li>
                    <li>Deletion</li>
                    <li>Objection</li>
                    <li>Data Portability</li>
                </ul>
                <p>To exercise these rights, please contact us using the details provided below.</p>
            </section>

            <section id="cookies">
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to improve the user experience on our website. Cookies help us:</p>
                <ul>
                    <li>Remember your preferences and login details</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide targeted advertisements based on your browsing behavior</li>
                </ul>
                <p>You can control the use of cookies through your browser settings, but please note that disabling cookies may affect the functionality of our website.</p>
            </section>

            <section id="third-party-links">
                <h2>7. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites or services. Please note that this Privacy Policy does not apply to those third-party websites. We encourage you to read the privacy policies of any external sites you visit.</p>
            </section>

            <section id="data-retention">
                <h2>8. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            </section>

            <section id="international-data-transfers">
                <h2>9. International Data Transfers</h2>
                <p>If you are accessing our services from outside [Insert Country], your data may be transferred to and processed in a country other than your own. By using our services, you consent to this transfer.</p>
            </section>

            <section id="children-privacy">
                <h2>10. Children's Privacy</h2>
                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
            </section>

            <section id="changes-policy">
                <h2>11. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
            </section>

            <section id="contact">
                <h2>12. Contact Us</h2>
                <p>If you have any questions, concerns, or requests related to this Privacy Policy or how we handle your personal information, please contact us:</p>
                <p><strong>Email:</strong> contact@remotephysios.com<br />
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
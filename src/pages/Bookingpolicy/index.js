import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';

const Bookingpolicy = () => {
   
    return (
      <>
        <Header />  

        <div className='faq-bg'>
        </div>
        
        
    <div className="policy-container">
        <header className="policy-header">
            <h1>Booking, Rescheduling, and Cancellation Policy</h1>
            <p><strong>Effective Date:</strong> 01 Oct 2024</p>
        </header>

        <div className="policy-content">
            <section id="introduction">
                <p>At Remote Physios, we strive to make your Physiotherapy experience as convenient and flexible as possible. Please review our policies regarding bookings, rescheduling, and cancellations. By booking an appointment, you agree to the terms outlined below.</p>
            </section>

            <section id="booking-policy">
                <h2>1. Booking Policy</h2>

                <h3>1.1 Appointment Booking</h3>
                <ul>
                    <li>Online Booking: Book your sessions through our website or mobile app. A confirmation email will be sent with your booking details, including the date, time, and assigned Physiotherapist.</li>
                    <li>Consultation Requirement: New patients must undergo an initial consultation to develop a personalized treatment plan.</li>
                    <li>Advance Booking: Please book at least 48 hours in advance to secure your preferred time slot.</li>
                </ul>

                <h3>1.2 Payment Terms</h3>
                <ul>
                    <li>Payment Upon Booking: Payments are required at the time of booking. All major credit/debit cards and secure payment gateways are accepted.</li>
                    <li>Package Options: Subscription packages are available for long-term care, offering discounted rates for multiple sessions.</li>
                </ul>
            </section>

            <section id="rescheduling-policy">
                <h2>2. Rescheduling Policy</h2>

                <h3>2.1 How to Reschedule</h3>
                <ul>
                    <li>Online Rescheduling: Log into your account on our website or app to reschedule. Select the session and choose a new date and time.</li>
                    <li>Notice Period: Reschedule at least 24 hours before your appointment to avoid penalties.</li>
                    <li>Limitations: Frequent rescheduling (more than 3 times a month) may incur a service charge.</li>
                </ul>

                <h3>2.2 Exceptions</h3>
                <ul>
                    <li>For emergencies or unforeseen events, please contact customer service for assistance with rescheduling without penalties.</li>
                </ul>
            </section>

            <section id="cancellation-policy">
                <h2>3. Cancellation Policy</h2>

                <h3>3.1 How to Cancel</h3>
                <ul>
                    <li>Online Cancellations: Log into your account to cancel upcoming appointments via our website or app.</li>
                    <li>Cancellation via Support: Alternatively, contact our support team to cancel your session.</li>
                </ul>

                <h3>3.2 Cancellation Fees</h3>
                <ul>
                    <li>24-Hour Notice: No cancellation fee if canceled more than 24 hours before the appointment.</li>
                    <li>Late Cancellations: Cancellations within 24 hours incur a 50% fee.</li>
                    <li>No-Show Policy: Full session fee is charged for no-shows without prior notice.</li>
                </ul>

                <h3>3.3 Subscription Cancellations</h3>
                <ul>
                    <li>For subscription package cancellations, contact customer service. Refunds are subject to specific conditions.</li>
                </ul>
            </section>

            <section id="device-rental">
                <h2>4. Device Rental Terms</h2>
                <ul>
                    <li>Device Cancellations: If an appointment is canceled after device delivery but before use, a device handling fee may apply.</li>
                    <li>Rescheduling with Devices: Devices remain with you for rescheduled sessions, provided they occur within a reasonable timeframe.</li>
                </ul>
            </section>

            <section id="refund-policy">
                <h2>5. Refund Policy</h2>
                <ul>
                    <li>Eligible Refunds: Refunds are available for cancellations made more than 24 hours before the session.</li>
                    <li>Refund Process: Refunds will be processed via the original payment method within 5-7 business days.</li>
                    <li>Non-Refundable: No refunds for late cancellations or no-shows.</li>
                </ul>
            </section>

            <section id="contact-info">
                <h2>6. Contact Us for Assistance</h2>
                <p>If you have any questions regarding bookings, rescheduling, or cancellations, please contact us at:</p>
                <p><strong>Email:</strong> contact@remotephysios.com<br />
                   <strong>Phone:</strong> +91 747-047-8888</p>
            </section>
        </div>
    </div>


        <Footer />
      </>
    )  
};

export default Bookingpolicy;
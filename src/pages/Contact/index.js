import React from 'react';
import './style.css'
import AboutSmall from '../../assets/images/theme-2/AboutSmall.svg';
import Aboutbg from '../../assets/images/theme-2/about-img.jpg';
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import ZendeskWidget from '../../ZendeskWidget/index';

const contact = () => {
    return (
  <>    
    <Header />  
        <div className='about-bg'>
            <img className='d-sm-block d-md-none' src={AboutSmall} />
            <img className='d-sm-none d-md-block d-none' src={Aboutbg} />
        </div>
        <section className="contact-sec sec-pad">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 mb-5">
                <h4>We’re Here to Help! </h4>
                  <p>At Remote Physios, we are committed to providing exceptional service and support to ensure you have the best experience possible. Whether you have questions about our services, need help with booking a session, or require technical assistance with our IoT-enabled devices, we are just a message away.</p>
                  <p>Feel free to reach out to us for any queries or concerns. Our team is available to assist you and guide you through your physiotherapy journe.</p>
                  <p>Or, simply fill out the form below, and we’ll get back to you as soon as possible.</p>
              </div>
              <div className="col-md-6">
                <div className="contact-detail">

                  <ul className="contact-ul nav flex-column">
                    <li className='d-flex align-items-start'><i className="fa fa-location-dot"></i> 
                    <a href='https://www.google.com/maps/place/Remote+Physios/@19.7201995,60.9294475,4z/data=!4m6!3m5!1s0x21223e3e7869f825:0x8a4ca8faf729316!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11lt9nkb79?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D'> <b> DK 2 / 373 Danish Kunj Kolar Road Bhopal 462042 MP India </b> </a> </li>

                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="tel:+91 747-047-8888"><b>+91 747-047-8888</b></a>
                    </li>

                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:Contact@remotephysios.com"><b> Contact@remotephysios.com</b></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>    
        
        
        <div className='py-5' style={{background:"#f4f4f4"}}>
          {/* <div class="opcrm-webform" id="opcrm-webform-66f110a634871595791e238d" data-form-url="https://forms.onepagecrm.com/66f110a634871595791e238d/"></div> */}
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <iframe
              src="https://forms.onepagecrm.com/66f110a634871595791e238d/"
              width="100%"
              height="1006"
              frameBorder="0"
              title="OnePageCRM Form"
              allowFullScreen
            ></iframe>
          </div>
        </div>  
    <Footer />    
    <ZendeskWidget />
  </>
    );
};

export default contact;
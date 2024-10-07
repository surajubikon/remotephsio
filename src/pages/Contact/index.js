import React from 'react';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';

const contact = () => {
    return (
  <>    
    <Header />  
        <div className='contact-bg'>
            {/* <h3>Contact Us</h3> */}
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
                    <li className='d-flex align-items-start'><i className="fa fa-location-dot"></i> <b> DK 2 / 373 Danish Kunj Kolar Road Bhopal 462042 MP India </b> </li>

                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="tel:08510004495"><b>+91 747-047-8888</b></a>
                    </li>

                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:pardeepkumar4bjp@gmail.com"><b> Contact@remotephysios.com</b></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <form action="#" className="contFrm" method="POST">
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                      <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                      <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                    </div>

                    <div className="col-sm-6">
                      <select className='inptFld'>
                          <option> Booking Inquiry</option>
                          <option> Rescheduling/Cancellation</option>
                          <option> Technical Support</option>
                          <option> General Information</option>
                          <option> Other </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
                    </div>

                    <div className="col-12">
                      <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
                    </div>
                  </div>
                </form>
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
  </>
    );
};

export default contact;
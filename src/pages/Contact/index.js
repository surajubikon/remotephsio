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
              <div className="col-md-6">
                <div className="contact-detail">

                  <ul className="contact-ul nav flex-column">
                    <li className='d-flex align-items-start'><i className="fa fa-location-dot"></i> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 </li>

                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="tel:08510004495"><b>+91 9876543210</b></a>
                    </li>

                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:pardeepkumar4bjp@gmail.com"><b> Demo@gmail.com</b></a>
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
                      <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
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
        <div class="opcrm-webform" id="opcrm-webform-66f110a634871595791e238d" data-form-url="https://forms.onepagecrm.com/66f110a634871595791e238d/"></div>
    <Footer />    
  </>
    );
};

export default contact;
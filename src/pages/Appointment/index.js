import React, { useEffect } from 'react';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';

const Appointment = () => {
  useEffect(() => {
    // Check if the page has been loaded before
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      // If not reloaded before, set flag in sessionStorage
      sessionStorage.setItem('hasReloaded', 'true');
      // Reload the page
      window.location.reload();
    }
  }, []);
    return (
  <>    
    <Header />  
      <div className='appointment-bg'></div>
            {/* <h3>appointment Us</h3> */}
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

export default Appointment;
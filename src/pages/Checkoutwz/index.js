import React, { useEffect } from 'react';
import './style.css';
import AboutSmall from '../../assets/images/theme-2/AboutSmall.svg';
import Aboutbg from '../../assets/images/theme-2/about-img.jpg';
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import ZendeskWidget from '../../ZendeskWidget/index';
const Checkoutwz = () => {
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
        <div className='about-bg'>
          <img className='d-sm-block d-md-none' src={AboutSmall} />
          <img className='d-sm-none d-md-block d-none' src={Aboutbg} />
        </div>
            {/* <h3>appointment Us</h3> */}
        <div className='py-5' style={{background:"#f4f4f4"}}>
          {/* <div class="opcrm-webform" id="opcrm-webform-66f110a634871595791e238d" data-form-url="https://forms.onepagecrm.com/66f110a634871595791e238d/"></div> */}
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <iframe
              src="https://nas.io/checkout-widget?communityCode=REMOTE_PHYSIOS&communitySlug=%2Fremotephysios&buttonText=Explore%20our%20community&buttonTextColorHex=%23000&buttonBgColorHex=%23fccb1d&widgetTheme=light&backgroundColorHex=%23fff"
              width="100%"
              height="300"
              frameBorder="0"
              title="REMOTE_PHYSIOS checkout widget"
              referrerpolicy="no-referrer"
              allowFullScreen
            ></iframe>
          </div>
        </div>  
      
    <Footer />    
    <ZendeskWidget />
    
  </>
    );
};

export default Checkoutwz;
// import logo from './logo.svg';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './assets/css/lity.min.css';
import './assets/css/normalize.css';
import './assets/css/theme-2.css';
import './assets/css/theme-font.css';
import './assets/css/theme-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/responsive-2.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GoogleAnalytics from './componet/GoogleAnalytics/index';
import ScrollRestoration from './ScrollRestoration';
import Home from "./pages/Home/index";
import About from "./pages/About";
import Demo from "./pages/demo";
// import ZendeskWidget from "./ZendeskWidget/index";

import Services from "./pages/Services/index";
import Servicescorporate from "./pages/Services/servicesCorporate";
import Serviceselder from "./pages/Services/servicesElder";
import Servicesjoint from "./pages/Services/servicesJoint";
import Servicesgeneralized from "./pages/Services/servicesGeneralized";
import Servicessurgical from "./pages/Services/servicesSurgical";
import Servicesneurological from "./pages/Services/servicesNeurological";
import Servicescardiac from "./pages/Services/servicesCardiac";
import Servicespulmonary from "./pages/Services/servicesPulmonary";
import Servicesendurance from "./pages/Services/servicesEndurance";
import Servicesstretch from "./pages/Services/servicesStretch";
import Servicesbalance from "./pages/Services/servicesBalance";

import Contact from "./pages/Contact/index";
import Appointment  from "./pages/Appointment/index";
import Faq  from "./pages/Faq/index";
import TearmConditon  from "./pages/Tearmconditon/index";
import PrivacyPolicy  from "./pages/Privacypolicy/index";
import Checkoutwz  from "./pages/Checkoutwz/index";
import Corporatewellnessregistration  from "./pages/Corporatewellnessregistration/index";
import Disclaimer  from "./pages/Disclaimer/index";
import BookingPolicy   from "./pages/Bookingpolicy/index";

function App() {
  return (
    <Router>
        <ScrollRestoration />
        <GoogleAnalytics trackingId="G-6T0CB0CPGJ" />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/demo" element={<Demo />} />
         {/* <Route path="/zendeskwidget" element={<ZendeskWidget />} /> */}
         <Route path="/about" element={<About />} />
          
             <Route path="/services" element={<Services />} />
         <Route path="/services/corporate" element={<Servicescorporate />} />
         <Route path="/services/elder" element={<Serviceselder />} />
         <Route path="/services/joint" element={<Servicesjoint />} />
         <Route path="/services/generalized" element={<Servicesgeneralized  />} />
         <Route path="/services/surgical" element={<Servicessurgical />} />
         <Route path="/services/neurological" element={<Servicesneurological  />} />
         <Route path="/services/cardiac" element={<Servicescardiac />} />
         <Route path="/services/pulmonary" element={<Servicespulmonary />} />
         <Route path="/services/endurance" element={<Servicesendurance />} />
         <Route path="/services/stretch" element={<Servicesstretch />} />
         <Route path="/services/balance" element={<Servicesbalance />} />
         
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/appointment" element={<Appointment />} /> 
         <Route path="/Faq" element={<Faq />} /> 
         <Route path="/Tearmconditon" element={<TearmConditon />} /> 
         <Route path="/Privacypolicy" element={<PrivacyPolicy />} /> 
         <Route path="/checkoutwz" element={<Checkoutwz />} /> 
         <Route path="/corporatewellnessregistration" element={<Corporatewellnessregistration />} /> 
         <Route path="/disclaimer" element={<Disclaimer />} /> 
         <Route path="/bookingpolicy" element={<BookingPolicy />} /> 
         
      </Routes>
    </Router>
  );
}

export default App;


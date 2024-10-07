// import logo from './logo.svg';
import logo from './assets/images/theme-1/logo-dark.svg';
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About";
import Services from "./pages/Services/index";
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
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
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


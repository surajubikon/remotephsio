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
import Contact from "./pages/Contact/index";
import Appointment  from "./pages/Appointment/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/appointment" element={<Appointment />} /> 
      </Routes>
    </Router>
  );
}

export default App;


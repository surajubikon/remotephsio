import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LogoWhite from '../../assets/images/theme-1/logo-w.png';
import LogoDark from '../../assets/images/theme-1/logo.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
  
    const [isSticky, setIsSticky] = useState(false); // State to manage the sticky class
  
    useEffect(() => {
      // Function to handle scroll
      const handleScroll = () => {
        if (window.scrollY > 300) { // Check if the scroll position is greater than 300
          setIsSticky(true); // Set sticky to true
        } else {
          setIsSticky(false); // Set sticky to false
        }
      };
  
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array ensures the effect runs once on mount



  return (
  <>
    <header className={`mainmenu-area ${isSticky ? "sticky" : ""}`}>
        <div className="mainmenu-area navbar navbar-expand-lg p-0">
            <div className="container-fluid  container-lg">
                <div className="nav-row">
                    <div className="nav-logo">
                    {/* <FontAwesomeIcon icon={faApple} /> */}
                        <Link to="/" className="logo light-logo"><img src={LogoWhite}
                                alt="" /></Link>
                        <Link to="/" className="logo dark-logo"><img src={LogoDark} alt="" /></Link>
                    </div>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav className="menu-items">
                        <ul>
                            {/* <li><NavLink exact to="/" activeClassName="active"> Home </NavLink></li> */}
                            <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
                             {/* <li><Link to="/about">About us</Link></li> */}
                            <li><NavLink to="/services" activeClassName="active">Services </NavLink>
                                <ul>
                                  <li> <NavLink to="/services/corporate">  Corporate Employee Wellness</NavLink> </li>
                                  <li> <NavLink to="/services/elder">  Elder Care Physiotherapy</NavLink> </li>
                                  <li> <NavLink to="/services/joint">  Joints pain and Stiffness</NavLink> </li>
                                  <li> <NavLink to="/services/generalized">  Generalized Muscular Pains</NavLink> </li>
                                  <li> <NavLink to="/services/surgical">  Post Surgical Recovery</NavLink> </li>
                                  <li> <NavLink to="/services/neurological">  Recovery from Neurological conditions</NavLink> </li>
                                  <li> <NavLink to="/services/cardiac">  Cardiac Rehabilitation</NavLink> </li>
                                  <li> <NavLink to="/services/pulmonary">  Pulmonary Rehabilitation</NavLink> </li>
                                  <li> <NavLink to="/services/endurance">  Endurance Training</NavLink> </li>
                                  <li> <NavLink to="/services/stretch">  Stretch your Muscles</NavLink> </li>
                                  <li> <NavLink to="/services/balance">  Balance and Coordination Training</NavLink> </li>
                                </ul>
                            </li>
                            <li><Link to="https://remotephysios.in/remote/home">Self Assessment </Link></li>
                            <li><Link to="https://nas.io/remotephysios">Community </Link></li>
                            {/* <li><Link to="/">Hiring </Link></li> */}
                            {/* <li> <NavLink to="/contact" activeClassName="active"> Contact </NavLink></li>
                            <li> <NavLink to="/faq" activeClassName="active"> Faq </NavLink></li> */}
                            {/* <li><Link to='/checkoutwz' className='bookConsultant'>Community</Link></li> */}
                            <li><Link to='/appointment' className='bookConsultant'>Book Your Free Consultation </Link></li>
                        </ul>
                    </nav>
                   </div> 
                </div>
            </div>
        </div>
    </header> 
    
  </> 
  ); 
};

export default Header;

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
                            <li> <NavLink exact to="/" activeClassName="active"> Home </NavLink></li>
                            <li><Link to="/">About uss</Link></li>
                             {/* <li><Link to="/about">About us</Link></li> */}
                            <li><Link to="/">Product</Link></li>
                            <li> <NavLink to="/contact" activeClassName="active"> Contact </NavLink></li>
                            <li><a href='appointment' className='bookConsultant'>Book Your Free Consultation </a></li>
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

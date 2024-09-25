// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/images/theme-1/logo-w.png';

const Footer = () => {
  return (
    <footer className="footer-area">
            <div className="container-fluid container-lg">
                <div className="row footer-top section-padding">
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="footer-widget pe-lg-3 g-md-4 g-xl-5">
                            <Link to="/" className="footer-logo">
                                <img style={{width:'100px'}} src={LogoWhite} alt="Landshop" />
                            </Link>
                            <div className="desc">
                                <p>Temporibus autem quibusdam aut officiis debitis aut rerum necessitatibus saepde eveniet ut et voluptates.</p>
                            </div>
                            <ul className="social-menu">
                                <li><Link to="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 mb-5 mb-lg-0">
                        <div className="footer-widget">
                            <h4 className="widget-title">Product</h4>
                            <ul className="block-list">
                                <li><Link to="javascript:void(0)">Home </Link></li>
                                <li><Link to="javascript:void(0)">About Us</Link></li>
                                <li><Link to="javascript:void(0)">Services</Link></li>
                                <li><Link to="javascript:void(0)">Testimonials</Link></li>
                                <li><Link to="javascript:void(0)">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2 col-sm-6 mb-5 mb-lg-0">
                        <div className="footer-widget">
                            <h4 className="widget-title">Support</h4>
                            <ul className="block-list">
                                <li><Link to="javascript:void(0)">Demo@gmail.com</Link></li>
                                <li><Link to="javascript:void(0)">+91 9876543210</Link></li>
                                <li><Link to="javascript:void(0)">Terms & Condition</Link></li>
                                <li><Link to="javascript:void(0)">FAQ Questions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="footer-widget">
                            <h4 className="widget-title">Subscribe Newsletter</h4>
                            <div className="desc">
                                <p>Subscribe to our newsletter for health tips and updates
                                </p>
                            </div>
                            <form className="subscribe-form" id="subscribe-form">
                                <div className="form-group">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" id="mc-email" name="EMAIL" className="input-control" placeholder="Enter your mail address" />
                                    <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                </div>
                                <label></label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="copyrights">
                        <p>&copy;2023 All rights reserved. Powered by Remote Phisio</p>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;

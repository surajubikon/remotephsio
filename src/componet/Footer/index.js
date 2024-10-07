// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import LogoWhite from '../../assets/images/theme-1/logo-w.png';
import { FaThreads, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>

        <footer className="footer-area">
                <div className="container-fluid container-lg">
                    <div className="row footer-top section-padding">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="footer-widget pe-lg-3 g-md-4 g-xl-5">
                                <Link to="/" className="footer-logo">
                                    <img style={{width:'100px'}} src={LogoWhite} alt="Landshop" />
                                </Link>
                                <div className="desc">
                                    <p style={{fontSize:"14px"}}>Recover at your Pace , At the Comfort of your Space. </p>
                                </div>
                                <ul className="social-menu">
                                    <li><Link to="https://www.facebook.com/Remotephysios"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li><Link to="https://www.threads.net/@remote_physios"><FaThreads /> </Link></li>
                                    <li><Link to="https://www.instagram.com/remote_physios/"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link to="https://www.linkedin.com/company/remotephysios"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                    <li><Link to="https://www.quora.com/profile/RemotePhysios"><i class="fa-brands fa-quora"></i></Link></li>
                                    <li><Link to="https://x.com/RemotePhysios"><FaXTwitter /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-5 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget">
                                <h4 className="widget-title">Following links </h4>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-6'>
                                        <ul className="block-list">
                                            <li><Link to="javascript:void(0)">Testimonials </Link></li>
                                            <li><Link to="javascript:void(0)">FAQs</Link></li>
                                            <li><Link to="javascript:void(0)">Contact us</Link></li>
                                            <li><Link to="javascript:void(0)">Disclaimer </Link></li>
                                        </ul>
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <ul className="block-list">
                                            <li><Link to="javascript:void(0)">Terms and Conditions</Link></li>
                                            <li><Link to="javascript:void(0)">Privacy Policy </Link></li>
                                            <li><Link to="javascript:void(0)">Booking Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget">
                                <h4 className="widget-title">Support</h4>
                                <ul className="block-list">
                                    <li><Link to="javascript:void(0)">Contact@remotephysios.com</Link></li>
                                    <li><Link to="javascript:void(0)">+91 747-047-8888</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-md-12 col-lg-3">
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
                        </div> */}
                    </div>
                    <div className="row footer-bottom">
                        <div className="copyrights">
                            <p>&copy;2023 All rights reserved. Powered by Remote Phisio</p>
                        </div>
                    </div>
                </div>
        </footer>
    </>
  );
}

export default Footer;

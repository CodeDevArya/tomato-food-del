import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container animate-fadeIn3" id="footer">
            <div className="footer-grid">
                <div className="footer-column">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis aspernatur, odio modi sapiente quisquam animi fuga repudiandae natus quo dignissimos ea aperiam impedit voluptatum perspiciatis iste laborum magnam illo.</p>
                    <div className="footer-social-icons">
                        <img className="social-icon" src={assets.facebook_icon} alt="facebook_icon" />
                        <img className="social-icon" src={assets.twitter_icon} alt="twitter_icon" />
                        <img className="social-icon" src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
                </div>
                <div className="footer-column">
                    <h2 className="footer-heading">COMPANY</h2>
                    <ul className="footer-links">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Delivery</li>
                        <li className="footer-link">Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2 className="footer-heading">GET IN TOUCH</h2>
                    <ul className="footer-links">
                        <li className="footer-link">+1-212-456-7890</li>
                        <li className="footer-link">tomatofoods@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className="footer-divider" />
            <p className="footer-copy">Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
        </div>

    )
}

export default Footer

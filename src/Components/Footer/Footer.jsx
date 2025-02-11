import React from 'react';
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; 
import footer_logo from "../../assets/footer_logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="nav-name1">
                  Gautam
                  <img src={theme_pattern} alt="" />
                </div>
          <p>I am a frontend developer from Pune with 2 years of experience in companies like GenAI Protos.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'> 2024 Gautam Bhawsar. All rights reserved.</p>
        
        {/* Social Media Icons */}
        <div className="footer-icons">
          <a href="https://www.instagram.com/er.gautam_bhawsar?igsh=ZXE4ZHYzMzNkendt&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" style={{color: "#E4405F", marginRight:"10px"}}/>
          </a>
          <a href="https://www.linkedin.com/in/gautam-bhawsar-82267625b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" style={{color: "#0077B5", marginLeft:"20px"}} />
          </a>
          <a href="https://www.linkedin.com/in/gautam-bhawsar-82267625b/" target="_blank" rel="noopener noreferrer">
            <VscGithub className="social-icon" style={{color: "#ffffff", marginLeft:"20px"}} />
          </a>
        </div>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

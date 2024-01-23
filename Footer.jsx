import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

const Footer = () => {
  const [isActive] = useState(false);

  return (
    <footer className="footer-container">
      <div className="address-container">
        <div className="address">
        <h3>ADDRESS</h3>
        </div>
        <div className="office">
          <div className="office-item">
            <h4>Headquarters</h4>
            <p>
              11504 KLKHORN DRIVE,<br />
              CLARKSBURG-MD-20871
            </p>
          </div>
          <div className="office-item">
            <h4>Corporate Office</h4>
            <p>
              13800 Coppermine RD<br />
              Suite #162,Herndon,<br />
              VA-20171
            </p>
          </div>
        </div>
        <div className="innovation-center">
          <h4>Innovation Center</h4>
          <p>A-Hub,Andhra University<br />
          Incubation Center,<br />
          AU North Campus,Visakhapatnam<br />
          AP-530003</p>
        </div>
      </div>

      <div className="contact-info">
        <h3>CONTACT US</h3>
        <p>301-363-9398</p>
        <p>info@refyndata.com</p>
        <div class="social-container">
        <h3>Social Follow</h3>
        <a href="https://www.linkedin.com/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      </div>

      <div className="row">
        <div className="col-3">
          <ul className={`footer-cat-links ${isActive ? 'active' : ''}`}>
            <li><a href="Home"><span>Home</span></a></li>
            <li><a href="Services"><span>Services</span></a></li>
            <li><a href="Clients"><span>Clients</span></a></li>
            <li><a href="ContactUs"><span>Contact Us</span></a></li>
          </ul>
          <ul className={`footer-cat-links1 ${isActive ? 'active' : ''}`}>
            <li><a href="AboutUs"><span>About Us</span></a></li>
            <li><a href="ITStaffing"><span>IT Staffing</span></a></li>
            <li><a href="Careers"><span>Careers</span></a></li>
          </ul>
        </div>
      </div>
      
      <div id="copyright">
        &copy; 2024 Refyn Data. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

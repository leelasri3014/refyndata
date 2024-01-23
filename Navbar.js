import React from 'react';
import './style.css';
import { useState } from 'react';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      if (buttonName === 'Services') {
        // Toggle the dropdown visibility on "Services" button click
        setShowDropdown(!showDropdown);
      } else {
        // Close the dropdown for other buttons
        setShowDropdown(false);
      }
    };
  
    return (
      <nav className="navbar">
        <ul className="nav-list">
        <li className={`nav-item ${activeButton === 'Home' ? 'active' : ''}`} onClick={() => handleButtonClick('Home')}>
          Home
          </li>
          <li className={`nav-item ${activeButton === 'About Us' ? 'active' : ''}`} onClick={() => handleButtonClick('About Us')}>
          About Us
          </li>
          <li className={`nav-item ${activeButton === 'IT Staffing' ? 'active' : ''}`} onClick={() => handleButtonClick('IT Staffing')}>
          IT Staffing
          </li>
          <li className={`nav-item dropdown ${showDropdown ? 'active' : ''}`} onClick={() => handleButtonClick('Services')}>
          Services
          <span className="arrow">&#9660;</span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li className={`nav-item ${activeButton === 'Enterprise Data & Analytics' ? 'active' : ''}`} onClick={() => handleButtonClick('Enterprise Data & Analytics')}>
                Enterprise Data & Analytics
                </li>
                <li className={`nav-item ${activeButton === 'Infrastructure Modernization' ? 'active' : ''}`} onClick={() => handleButtonClick('Infrastructure Modernization')}>
                Infrastructure Modernization
                </li>
                <li className={`nav-item ${activeButton === 'Knowledge and Content Management' ? 'active' : ''}`} onClick={() => handleButtonClick('Knowledge and Content Management')}>
                Knowledge and Content Management
                </li>
                <li className={`nav-item ${activeButton === 'Application Development' ? 'active' : ''}`} onClick={() => handleButtonClick('Application Development')}>
                Application Development
                </li>
                <li className={`nav-item ${activeButton === 'Application and System Architecture' ? 'active' : ''}`} onClick={() => handleButtonClick('Application and System Architecture')}>
                Application and System Architecture
                </li>
                <li className={`nav-item ${activeButton === 'Big Data and Data Management' ? 'active' : ''}`} onClick={() => handleButtonClick('Big Data and Data Management')}>
                Big Data and Data Management
                </li>
                <li className={`nav-item ${activeButton === 'Business Analysis' ? 'active' : ''}`} onClick={() => handleButtonClick('Business Analysis')}>
                Business Analysis
                </li>
                <li className={`nav-item ${activeButton === 'Business Intelligence' ? 'active' : ''}`} onClick={() => handleButtonClick('Business Intelligence')}>
                Business Intelligence
                </li>
                <li className={`nav-item ${activeButton === 'Mobile Application Development' ? 'active' : ''}`} onClick={() => handleButtonClick('Mobile Application Development')}>
                Mobile Application Development
                </li>
                <li className={`nav-item ${activeButton === 'Project Management' ? 'active' : ''}`} onClick={() => handleButtonClick('Project Management')}>
                Project Management
                </li>
                <li className={`nav-item ${activeButton === 'Technology Infrastructure' ? 'active' : ''}`} onClick={() => handleButtonClick('Technology Infrastructure')}>
                Technology Infrastructure
                </li>
              </ul>
            )}
          </li>
          <li className={`nav-item ${activeButton === 'Clients' ? 'active' : ''}`} onClick={() => handleButtonClick('Clients')}>
          Clients
          </li>
          <li className={`nav-item ${activeButton === 'Careers' ? 'active' : ''}`} onClick={() => handleButtonClick('Careers')}>
          Careers
          </li>
          <li className={`nav-item ${activeButton === 'Contact Us' ? 'active' : ''}`} onClick={() => handleButtonClick('Contact Us')}>
          Contact Us
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;

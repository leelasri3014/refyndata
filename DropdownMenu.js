import React, { useState } from 'react';
import './style.css';

const DropdownMenu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <ul className="dropdown-menu">
      <li className={`dropdown-item ${activeButton === 'Service 1' ? 'active' : ''}`} onClick={() => handleButtonClick('Service 1')}>
        Service 1
      </li>
      {/* Add similar lines for other items in the dropdown menu */}
    </ul>
  );
};

export default DropdownMenu;

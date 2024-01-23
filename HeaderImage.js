import React from "react";
import "./HeaderImage.css";

const HeaderImage = () => {
  return (
      <div className="header-image-container">
      <img className="image-container" alt="Header_Image" src={require('../images/image-2.png')} />
      </div>
  );
};

export default HeaderImage;
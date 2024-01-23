import React from 'react';
import './HexagonalImages.css';

const HexagonalImages = () => {
  return (
    <div className="hexagonal-images-container">
      <div className="hex-row">
       <img className="hex-image" alt="Hex1_Image" src={require('../images/h1.png')} /> 
       <img className="hex-image1" alt="Hex2_Image" src={require('../images/h2.png')} />
      </div>

      <div className="hex-row1">
       <img className="hex-image2" alt="Hex3_Image" src={require('../images/h3.png')} /> 
       <img className="hex-image3" alt="Hex4_Image" src={require('../images/h4.png')} />
      </div>

      <div className="hex-row2">
       <img className="hex-image4" alt="Hex5_Image" src={require('../images/h5.png')} />
      </div>
    </div>
  );
};

export default HexagonalImages;

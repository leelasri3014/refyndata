import React from "react";
import "./Section1.css";

const Section1 = () => {
  const handleReadMoreClick = () => {
    // Navigate to the 'read-more' page
    window.location.href = '/read-more';
  };
    return (
      <div className="rectangle">
       <div className="label">
        <div className="text-wrapper">WELCOME TO REFYN DATA</div>
       </div>
       <div className="label1">
        <p className="REFYNDATA-IS-a">
          REFYNDATA IS A BUSINESS PLATFORM BUILT ON SPECIALIZED TECHNOLOGY AND IT-RELATED SERVICES, RUN BY A BUNCH OF SMART, KNOWLEDGEABLE, AND EXPERIENCED PEOPLE.
          <br />
          <br />
          We serve small, medium, and large scale organizations with the belief that no business or technological
          initiative is too difficult for us to handle. We value your initiatives as our own and work towards creating
          short-term and long-term benefits that are worth your while.
        </p>
        <div className="read-more-link" onClick={handleReadMoreClick}>
          READ MORE
        </div>
       </div>
       <div className="image-container">
        <img className="image" alt="Section1_Image" src={require('../images/image-3.png')} />
       </div>
      </div>
    )
}

export default Section1;
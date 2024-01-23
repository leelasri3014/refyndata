import React from "react";
import "./Section2.css";

const Section2 = () => {
  const handleReadMoreClick = () => {
    window.location.href = '/read-more';
  };
    return (
      <div className="rectangle1">
        <div className="image-container1">
         <img className="image" alt="Section1_Image" src={require('../images/image-4.png')} />
        </div>
       <div className="label2">
        <div className="text-wrapper">IT STAFFING</div>
       </div>
       <div className="label3">
        <p className="it-staffing-body">
          Team of Experienced, Passionate and Innovative Staffing professionals.
          <br />
          <br />
          We locate, we investigate, we fit into place the most professionally 
          sound and technically experienced IT talent from around the globe. 
          We help you maintain focus on your business targets and take on the 
          drudge of finding the right people who can help you stay that way. It 
          doesn't matter if you and your candidates are geographical poles 
          apart; we form the horizon on which you meet.
        </p>
        <div className="read-more-link1" onClick={handleReadMoreClick}>
          READ MORE
        </div>
       </div>
      </div>
    )
}

export default Section2;
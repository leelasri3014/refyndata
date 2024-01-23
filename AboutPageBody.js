import React from "react";
import "./AboutPageBody.css";

const AboutPageBody = () => {
    return (
      <div className="about-page">
       <div className="s1">
        <p className="text-wrapper">
            At RefynData, we're not just IT experts - we're your co-pilot on the road to digital success. Our 
            passion lies in crafting innovative solutions that propel your business forward, with quality and partnership at 
            the heart of everything we do.
        </p>
       </div>
       <div className="s2">
        <p className="text-wrapper">
          <b>Your Success, Our Story</b>
          <br />
          <br />
          We're not just about solving problems - we're about celebrating your victories. Every client success 
          story adds another chapter to our own journey, fueling our passion and commitment to helping businesses like 
          yours reach their full potential.
        </p>
       </div>
       <div className="about-image">
        <img className="a-image" alt="Section1_Image" src={require('../images/image-5.png')} />
       </div>
       <div className="rec">
       <div className="rec-text">
        <p className="text-wrapper">
            To empower organizations of all sizes with world-class technology and talent, unlocking their full potential and 
            fueling their long-term growth.
        </p>
       </div>
       </div>
       <div className="s3">
        <p className="text-wrapper">
          <b>How We Do It</b>
          <br />
          <br />
          Global Reach, Local Touch: With headquarters in the USA and dedicated teams in Canada and India, we bring a 
          global perspective combined with regional agility.
          <br />
          <br />
          Your Challenges, Our Solutions: Whether you need top-notch talent for short-term projects or expert guidance for 
          complex IT initiatives, we have the resources and expertise to meet your unique needs.
          <br />
          <br />
          Nurturing Brilliance: We invest in cultivating in-house talent, ensuring you receive solutions crafted by 
          passionate and skilled professionals.
          <br />
          <br />
          Win-Win Collaboration: We believe in partnerships, not just transactions. When you succeed, we succeed. 
          That's why we go the extra mile to understand your goals and tailor our services to perfectly align with 
          your vision.
        </p>
       </div>
       <div className="s4">
        <p className="text-wrapper">
          <b>Our expertise extends beyond staffing. We offer a comprehensive suite of IT services, including:</b>
          <br />
          <br />
          Application Development: We build custom software solutions that transform your processes and fuel your growth.
          <br />
          <br />
          System Architecture: We design and implement robust IT infrastructure that scales with your needs.
          <br />
          <br />
          Data Management: We unlock the insights hidden within your data, driving informed decision-making.
          <br />
          <br />
          Project Management: We take the reins of your IT projects, ensuring smooth execution and timely delivery.
        </p>
       </div>
      </div>
    )
}

export default AboutPageBody;
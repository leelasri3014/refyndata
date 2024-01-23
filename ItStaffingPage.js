import React from "react";
import "./ItStaffingPage.css";

const ItStaffingPage = () => {
    return (
      <div className="itstaffing-page">
       <div className="t1">
        <p className="text-wrapper">
            <b>Bridge the Talent Gap with RefynData's IT Staffing Expertise</b>
            <br />
            <br />
            Finding the right tech talent can feel like swimming through an ocean of data, searching for that perfect pearl. 
            (Imagine a diver searching for a pearl in a vast ocean) It's time-consuming, frustrating, and often leaves 
            you empty-handed. But just like a skilled pearl diver, RefynData's expert IT staffing team knows exactly 
            where to look and how to identify the gems you need.
        </p>
       </div>
       <div className="t2">
        <p className="text-wrapper">
          <b>Meet Your Talent Matchmaker</b>
          <br />
          <br />
          We're passionate about connecting businesses with experienced, qualified, and passionate IT professionals 
          who perfectly fit their specific needs. From developers and engineers to data analysts and project managers, our 
          global network gives you access to a vast pool of top-tier talent.
        </p>
       </div>
       <div className="itstaffing-image">
        <img className="i-image" alt="ITStaffing_Image" src={require('../images/image-6.png')} />
       </div>
       <div className="itstaffing-image1">
         <img className="i-image1" alt="ITStaffing_Image1" src={require('../images/image-7.png')} />
        </div>
       <div className="t3">
        <p className="text-wrapper">
          <b>The RefynData Difference</b>
          <br />
          Targeted Search: We utilize cutting-edge sourcing methods and industry insights to pinpoint the ideal 
          candidates for your unique requirements.
          <br />
          Rigorous Evaluation: Our comprehensive interview process, combined with in-depth skill assessments, ensures 
          you receive only the most qualified individuals.
          <br />
          Global Reach: We tap into a diverse talent pool across the globe, expanding your possibilities and finding 
          the perfect fit, regardless of location.
          <br />
          Tailored Solutions: We carefully listen to your company's goals and culture to personalize our staffing 
          solutions, ensuring a seamless integration of new talent.
        </p>
       </div>
       <div className="t4">
        <p className="text-wrapper">
          <b>Beyond Recruitment</b>
          <br />
          <br />
          RefynData doesn't just find you talent; we become your trusted partner in building a high-performing 
          team. We offer a comprehensive suite of IT staffing services, including:
          <br />
          <br />
          Bundled Staffing Solutions: Streamline your hiring process with our all-inclusive recruitment packages.
          <br />
          National Recruiting: Access top talent across the country with our expert nationwide search capabilities.
          <br />
          Recruitment Process Outsourcing: Offload the burden of finding talent to our experienced team, freeing you 
          to focus on your core business.
          <br />
          Staff Augmentation: Fill temporary skill gaps or scale your team quickly with our flexible on-demand talent solutions.
          <br />
          Program & Project Management: Ensure the success of your IT initiatives with our skilled project 
          management specialists.
         </p>
       </div>
       <div className="t5">
        <p className="text-wrapper">
          Don't waste another minute struggling with the IT talent pool. Let RefynData be your guide. Contact us today 
          for a free consultation and discover how we can help you build a team that drives your business forward.
        </p>
       </div>
       <div className="itstaffing-image2">
        <img className="i-image2" alt="ITStaffing_Image2" src={require('../images/image-8.png')} />
       </div>
      </div>
    )
}

export default ItStaffingPage;
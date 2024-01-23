import React from "react";
import "./ClientPage.css";

const ClientPage = () => {
    return (
      <div className="client-page">
       <div className="c1">
        <p className="text-wrapper">
            OUR CLIENTS
        </p>
       </div>
       <div className="c2">
        <p className="text-wrapper">
            <b>From Startups to Titans, We Fuel Growth</b>
            Discover How RefynData Empowers Industry Leaders
        </p>
       </div>
       <div className="c3">
        <p className="text-wrapper">
            Imagine a world where data isn't just numbers, but a map to success. Where insightful analytics illuminate 
            the path forward, and technology becomes the engine driving growth. At RefynData, we turn this vision into 
            reality for some of the most renowned brands across diverse industries.
        </p>
       </div>
       <div className="client-image">
        <img className="c-image" alt="Client_Image" src={require('../images/image-9.png')} />
        <img className="c-image1" alt="Client_Image" src={require('../images/image-10.png')} />
        <img className="c-image2" alt="Client_Image" src={require('../images/image-11.png')} />
        <img className="c-image3" alt="Client_Image" src={require('../images/image-12.png')} />
        <img className="c-image4" alt="Client_Image" src={require('../images/image-13.png')} />
        <img className="c-image5" alt="Client_Image" src={require('../images/image-14.png')} />
        <img className="c-image6" alt="Client_Image" src={require('../images/image-15.png')} />
        <img className="c-image7" alt="Client_Image" src={require('../images/image-16.png')} />
        <img className="c-image8" alt="Client_Image" src={require('../images/image-17.png')} />
        <img className="c-image9" alt="Client_Image" src={require('../images/image-18.png')} />
        <img className="c-image10" alt="Client_Image" src={require('../images/image-19.png')} />
        <img className="c-image11" alt="Client_Image" src={require('../images/image-20.png')} />
       </div>
       <div className="c4">
        <p className="text-wrapper">
            At RefynData, we're not just IT experts - we're your co-pilot on the road to digital success. Our 
            passion lies in crafting innovative solutions that propel your business forward, with quality and partnership at 
            the heart of everything we do.
        </p>
       </div>
       <div className="c5">
        <p className="text-wrapper">
            At RefynData, we're not just IT experts - we're your co-pilot on the road to digital success. Our 
            passion lies in crafting innovative solutions that propel your business forward, with quality and partnership at 
            the heart of everything we do.
        </p>
       </div>
       </div>
    );
};

export default ClientPage;
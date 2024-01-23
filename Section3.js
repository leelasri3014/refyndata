import React from 'react';
import HexagonalImages from './HexagonalImages';
import './Section3.css';

const Section3 = () => {
    const handleReadMoreClick = () => {
        window.location.href = '/read-more';
      };
  return (
    <div className='rectangle2'>
        <section className="section section-hexagonal">
         <HexagonalImages />
        </section>
        <section className="section section-single">
        <div className="right">
         <div className="text-wrapper">ENTERPRISE DATA & ANALYTICS</div>
        </div>
         <div className="right1">
         <p className="enterprise-data-body">
          Bad data can spell bad business for any 
          organization-even yours. Your intrinsic 
          business processes,customer relations,
          and revenue opportunities take a beating. 
          At best,it can lead to a lot of hard work 
          and resource effort going down the drain 
          and at worst, heavy fines for non-compliance 
          to regulations.
        </p>
        <div className="read-more-link2" onClick={handleReadMoreClick}>
          READ MORE
        </div>
         </div>
        </section>
    </div>
    );
  };

  export default Section3;
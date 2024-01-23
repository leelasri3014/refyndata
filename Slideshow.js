import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css'; // Import your CSS file

import i1 from '../images/i1.jpg';
import i2 from '../images/i2.png';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';
import i7 from '../images/i7.jpg';
import i8 from '../images/i8.jpg';
import i9 from '../images/i9.jpg';
import i10 from '../images/i10.jpg';
import i11 from '../images/i11.jpg';
import i12 from '../images/i12.jpg';
import i13 from '../images/i13.jpg';
import i14 from '../images/i14.jpg';

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14];
const imagesPerRow = 7;
const delay = 1000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length * imagesPerRow - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * (100 / (images.length * imagesPerRow))}%, 0, 0)`,
        }}
      >
        {Array.from({ length: images.length * imagesPerRow }, (_, idx) => (
          <div
            className="slide"
            key={idx}
            style={{
              backgroundImage: `url(${images[idx % images.length]})`,
              width: `${100 / imagesPerRow}%`,
              transform: `scale(${
                index === idx ? 1.2 : 1
              })`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

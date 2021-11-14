import React from 'react';
import useWindowDimensions from '../../helper/useWindowDimension';
import './StarBg.scss';
const StarBg = ({ bottom }) => {
  const { height, width } = useWindowDimensions();
  const starCount = 100;
  return (
    <div className='star-container'>
      {[...Array(starCount)].map((value, index) => (
        <div
          className='star'
          key={index}
          style={
            bottom
              ? {
                  animation: `twinkle ${Math.random() * 5 + 5}s linear ${
                    Math.random() * 5 + 5
                  }s infinite`,
                  bottom: `${Math.random() * height}px`,
                  left: `${Math.random() * width}px`,
                }
              : {
                  animation: `twinkle ${Math.random() * 5 + 5}s linear ${
                    Math.random() * 5 + 5
                  }s infinite`,
                  top: `${Math.random() * height}px`,
                  left: `${Math.random() * width}px`,
                }
          }
        ></div>
      ))}
    </div>
  );
};

export default StarBg;

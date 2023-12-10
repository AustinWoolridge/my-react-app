import React, { useState, useEffect } from 'react';

import usaFlagImage from './usa-flag.jpg'; // Relative path to the USA flag image

const MovingFlagGif = () => {
  const [position, setPosition] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const gifDuration = 5; // Total duration of the GIF in seconds
    const framesPerSecond = 10; // Frames per second
    const totalFrames = gifDuration * framesPerSecond;

    const interval = setInterval(() => {
      if (position < 100) { // Change 100 to the width of your container
        setPosition((position + 1) % totalFrames);
        if (position % framesPerSecond === 0) {
          // Multiply the multiplier by 2 every second
          setMultiplier((prevMultiplier) => prevMultiplier * 2);
        }
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(interval);
  }, [position]);

  const flagSize = '80px'; // Set the size of the USA flag to match the red ball

  const containerStyle = {
    width: '100%',
    height: '100px',
    position: 'relative',
  };

  const flagStyle = {
    width: flagSize,
    height: flagSize,
    backgroundImage: `url(${usaFlagImage})`, // Use the imported image
    backgroundSize: 'cover',
    borderRadius: '50%',
    position: 'absolute',
    left: `${position}%`,
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const multiplierStyle = {
    position: 'absolute',
    top: '50%', // Center the number vertically in the flag
    left: '50%', // Center the number horizontally in the flag
    transform: 'translate(-50%, -50%)',
    fontSize: '12px', // Make the number smaller
    fontFamily: 'Comic Sans MS', // Apply the Comic Sans font
    fontWeight: 'bold',
    
    color: 'green', // Set the text color to white to be visible on the flag
  };

  return (
    <div style={containerStyle}>
      <div style={flagStyle}>
        <div style={multiplierStyle}>{multiplier}</div>
      </div>
    </div>
  );
};

export default MovingFlagGif;

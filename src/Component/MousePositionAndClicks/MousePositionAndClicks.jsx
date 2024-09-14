import React, { useState, useEffect } from 'react';

function MousePositionAndClicks() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []); 

  const handleButtonClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return (
    <div>
      <h2>Mouse Position: X - {x}, Y - {y}</h2>
      <h2>Button Clicks: {clicks}</h2>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default MousePositionAndClicks;

import React, { useState, useEffect } from 'react';

const Counterinterval = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default Counterinterval;

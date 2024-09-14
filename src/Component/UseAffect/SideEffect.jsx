import React, { useEffect, useState } from "react";
import './SideEffect.css'; 

function SideEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component has rendered. Current counter value:", counter);
  });

  return (
    <div className="container">
      <h2 className="counter">Counter = {counter}</h2>
      <button className="button" onClick={() => setCounter((prev) => prev + 1)}>
        {counter}
      </button>
    </div>
  );
}

export default SideEffect;

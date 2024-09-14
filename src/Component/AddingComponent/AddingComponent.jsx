import React, { useState } from 'react';
import './AddingComponent.css';

const AddingComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      <button onClick={decrement} className="button">
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button onClick={increment} className="button">
        +
      </button>
    </div>
  );
};

export default AddingComponent;

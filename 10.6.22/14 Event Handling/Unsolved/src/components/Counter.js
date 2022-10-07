import React, { useState } from 'react';
import CardBody from './CardBody';

export default function Counter() {
  // setting up count variable w fn to update it. using useState hook and initial value is 0
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count + 1));
  };

  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* passing props into card body */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}

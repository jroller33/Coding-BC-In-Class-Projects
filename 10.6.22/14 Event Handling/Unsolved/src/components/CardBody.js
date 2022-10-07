import React from 'react';

// done

function CardBody({ count, handleDecrement, handleIncrement }) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;

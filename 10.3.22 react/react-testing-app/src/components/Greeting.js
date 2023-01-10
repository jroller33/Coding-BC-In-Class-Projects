// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('Welcome the following students to class!');
  


  const [group, setGroup] = useState(['Michael', 'Dwight', 'Jim']);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{ greeting }</p>
        <ul>
          <li>{ group[0] }</li>
          <li>{ group[1] }</li>
          <li>{ group[2] }</li>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;

// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('Welcome the following students to class!')

  // done: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['Heather', 'Samantha', 'Mariah'])
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* done: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {group.map(student => {
            return <li>{student}</li>
          })}

        </ul>
      </div>
    </div>
  );
}

export default Greeting;

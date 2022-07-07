import React, { useState } from 'react';

function MyFunctionComponent(props) {

  const [ counter, setCounter ] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <p>
      This is the functional component, created by {props.name}!!!
      <br/>
      <span>I'm {props.age} years old.</span>
      <br/>
      <div>I've been pressed {counter} times</div>
      <button onClick={incrementCounter}>Click me!!!</button>

      {props.tasks.map((t, index) => (
        <div key={index}>name: {t.name}, description: {t.description}</div>
      ))}
    </p>
  );

}

export default MyFunctionComponent;

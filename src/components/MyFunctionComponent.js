import React from 'react';

function MyFunctionComponent(props) {

  return (
    <p>
      This is the functional component, created by {props.name}!!!
      <br/>
      <span>I'm {props.age} years old.</span>
      <br/>

      {props.tasks.map((t, index) => (
        <div key={index}>name: {t.name}, description: {t.description}</div>
      ))}
    </p>
  );

}

export default MyFunctionComponent;

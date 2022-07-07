import React, { Component } from 'react';

class MyClassComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { tasks } = this.props;

    return (
      <p>
        This is the class component, created by {this.props.name}!!!
        <br/>
        <span>I'm {this.props.age} years old.</span>
        <br/>

        {tasks.map((t, index) => (
          <div key={index}>name: {t.name}, description: {t.description}</div>
        ))}

        <hr/>
        {this.props.children}

      </p>
    );

  }

}

export default MyClassComponent;

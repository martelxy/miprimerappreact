import React, { Component } from 'react';

class MyClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(previousState => ({
      counter: previousState.counter + 1
    }))
  }

  render() {

    const { tasks } = this.props;

    return (
      <p>
        This is the class component, created by {this.props.name}!!!
        <br/>
        <span>I'm {this.props.age} years old.</span>
        <br/>
        <div>I've been pressed {this.state.counter} times</div>
        <button onClick={this.incrementCounter}>Click me!!!</button>

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

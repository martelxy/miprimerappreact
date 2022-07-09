import React, { Component } from 'react';

class MyCycleComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newPeople: "",
      counter: 0
    };
    
    this.updateMyComponent = this.updateMyComponent.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  // handler event functions
  updateMyComponent() {
    this.setState(prevState => (
      { newPeople: "Mariana" }  // new State to assign
    ));
  }

  updateCounter() {
    this.setState(prevState => ({
      ...prevState,
      counter: prevState.counter + 1
    }))
  }

  // lifecycle methods
  componentDidMount() {
    console.log("'MyCycleComponent' ya fue montado");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( nextState.counter === 6 ) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Anteriormente el estado pervio era: ", prevState);
    console.log("Ahora el estado actual es: ", this.state);
  }

  componentWillUnmount() {
    console.log("'MyCycleComponent' ya fue desmontado completamente");
  }


  // Render Method
  render() {

    return (
      <div>
        <p>My cycle component by {this.state.newPeople || this.props.by}</p>
        <p>Ahora el contador va por: {this.state.counter}</p>
        <button onClick={this.updateMyComponent}>Update component</button>
        <button onClick={this.updateCounter}>Update counter</button>
      </div>

    );

  }

}

export default MyCycleComponent;

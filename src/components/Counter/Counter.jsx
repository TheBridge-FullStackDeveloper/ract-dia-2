import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialValue,
    };
  }
  //se ejecuta al montar el componente
  componentDidMount() {
    console.log("hola me he montado");
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return <div onClick={this.increment}>Counter: {this.state.counter}</div>;
  }
}

export default Counter;

import React from "react";
import ExampleChild from "../ExampleChild/ExampleChild";

export default class Example2 extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  handleRemove = () => this.setState({ show: false });

  render() {
    return (
      <div>
        {this.state.show ? <ExampleChild /> : null}
        <button onClick={this.handleRemove}>
          Eliminar el componete ExampleChild
        </button>
      </div>
    );
  }
}

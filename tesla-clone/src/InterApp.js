import React, { Component } from "react";

export class InterApp extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        InterApp
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default InterApp;

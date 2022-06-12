import React, { Component } from "react";
import ReactDOM from "react-dom";

class Second extends Component {
  render() {
    return <div> <h1>Child Component</h1> Counter =  {this.props.counter}</div>;
  }
}

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  handleIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <Second counter={this.state.count} />
        <h1>Parent Component</h1>
        
        <button type="button" onClick={this.handleIncrement}>
          increment by 1
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by 1
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Index></Index>, document.getElementById("root"));

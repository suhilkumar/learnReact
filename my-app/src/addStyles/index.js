import React, { Component } from "react";
import ReactDOM from "react-dom";

// mounting ,
// ComponentDidMount()  this is where you used when you required this component to be rendered first
export default class Index extends Component {
  //  it is an optional
  constructor() {
    console.log("constructor is called");
    super();
    this.state = {
      name: "Suhil",
      age: 10,
    };
  }
  // did you notice this method will execute again when the value of state is change but still
  // output the value thats declared in this method thats why we don't use this method
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      name: "suhilkumar",
      age: props.age,
    };
  }

  // shortcut is cdm
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "rucha" });
    }, 1000);
  }

  changeName = () => {
    this.setState({ name: "Rucha" });
  };

  // this is mandatory
  render() {
    console.log("render is called");
    return (
      <>
        <div>My name is {this.state.name}</div>
        <div>My age is {this.state.age}</div>
        <button type="button" onClick={this.changeName}>
          change
        </button>
      </>
    );
  }
}

ReactDOM.render(<Index age={30} />, document.getElementById("root"));

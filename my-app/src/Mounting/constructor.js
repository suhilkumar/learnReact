import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// mounting 
// 1 constructor
export default class Index extends Component {
//  it is an optional
  constructor(props){
    super(props)
    this.state = {
      name : "Suhil",
      age: props.age
    }
  }


  // this is mandatory
  render() {
    return (
      <>
      <div>My name is {this.state.name}</div>
      <div>My age is {this.state.age}</div>
      </>
    )
  }
}

ReactDOM.render(<Index  age={30}/>, document.getElementById("root"))
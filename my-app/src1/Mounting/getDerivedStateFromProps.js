import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// mounting , 
// 2 getDerivedStateFromProps(props, state)
export default class Index extends Component {
//  it is an optional
  constructor(){
    super()
    this.state = {
      name : "Suhil",
      age: 10
    }
  }
// the only problem is this method keeps on rendering 
  static getDerivedStateFromProps(props, state){
    return {
      name: "suhilkumar",
      age : props.age
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
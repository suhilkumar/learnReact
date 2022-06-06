import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component{
  render(){
    return(
      <div>
        <h2>You are inside parent component</h2>
        <Child name="suhil"></Child>
      </div>
    )
  }
}

class Child extends Component{
  render(){
    return(
      <div>
        <h2>You are inside Child component</h2>
        <p>author is {this.props.name}</p>
      </div>
    )
  }
}
ReactDOM.render(<Parent/>, document.getElementById("root"))
import wrapper from './wrapper';
import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>Higher Order Component</h1>
        <h2>by {this.props.name}</h2>
        <h3>age is {this.props.age}</h3>
        <h4>email is {this.props.email}</h4>
        <h4>mobile is {this.props.mobile}</h4>
      </div>
    )
  }
}

export default wrapper(App)
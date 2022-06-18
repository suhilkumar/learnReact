import wrapper from './wrapper';
import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>Higher Order Component</h1>
      </div>
    )
  }
}

export default wrapper(App)
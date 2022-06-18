import React, { Component } from 'react'
import App from './app'
import ReactDOM from 'react-dom';

export default class Index extends Component {
  render() {
    return (
      <div><App /></div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("root"))
import React, { Component } from 'react'
import App from './app'
import ReactDOM from 'react-dom';

export default class Index extends Component {
  render() {
    return (
      <div><App age={20} mobile={9125969819} email={'suhil.patel009@gmail.com'} /></div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("root"))

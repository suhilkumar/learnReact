import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.scss'
export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hi Suhil</h1>
        <h2>use scss</h2>
        <h3>instead of css</h3>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById("root"))

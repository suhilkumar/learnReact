import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class Index extends Component {

  render() {
    return (
      <div>
        <h1>Hi Suhil</h1>
        <h2>use scss</h2>
        <h3>instead of css</h3>
        <button type='button'>Save</button>
        <button className='btn btn-success'>Save</button>
        <button className='btn btn-danger'>Save</button>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById("root"))

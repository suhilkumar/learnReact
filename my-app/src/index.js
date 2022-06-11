// it is private to that component
// we can create state 2 ways 

// state without constructor

import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// export default class Index extends Component {
//   state ={
//       name: "Ajeet Singh",
//       age : 29
//   }
  
//     render() {
//     return (
//       <>
//       <p> Name: {this.state.name}</p>
//       <p> age : {this.state.name}</p>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// state with constructor

// if you just want to display the properties then you don't have to use state
export default class Index extends Component {
    constructor(){
        super()
        this.state = {
        name: "Ajeet Singh",
        age : 29
        }
    }
      render() {
      return (
        <>
        <p> Name: {this.state.name}</p>
        <p> age : {this.state.name}</p>
        </>
      )
    }
  }
  
  ReactDOM.render(<Index/>, document.getElementById('root'))
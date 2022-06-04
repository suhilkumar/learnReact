// import React, { Component } from 'react'
// import reactDom from 'react-dom'
// // if you want to import multiple file you can import in curly brackets with the help of ,
// import {Header, Content, Footer} from './app'

//   class Index extends Component {
//   render() {
//     return (<div>
//         <Header />
//         <Content />
//         <Footer />

//         </div>)
//   }
// }

// reactDom.render(<Index />, document.getElementById("root"))

import ReactDOM from "react-dom";
import {Student} from "./app"

// class Student extends React.Component {
//   constructor(){
//     super()
//     // this.objSub = {
//     //   subject: "Math"
//     // }
// // this is not a recommended approach you must always use state 

// this.state = {
//   subject:"math",
//   age: 28,
//   name : "Suhilkumar"
// }
//   }

//   render() {
//     return <h2>I am {this.state.name}, my age is {this.state.age} and I am Poor Student in {this.state.subject}</h2>;
//   }
// }
ReactDOM.render(<Student />, document.getElementById("root"));

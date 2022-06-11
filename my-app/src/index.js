// it is private to that component
// we can create state 2 ways

// state without constructor

import React, { Component } from "react";
import ReactDOM from "react-dom";

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
// export default class Index extends Component {
//     constructor(){
//         super()
//         this.state = {
//         name: "Ajeet Singh",
//         age : 29
//         }
//     }
//       render() {
//       return (
//         <>
//         <p> Name: {this.state.name}</p>
//         <p> age : {this.state.name}</p>
//         </>
//       )
//     }
//   }

//   ReactDOM.render(<Index/>, document.getElementById('root'))


// make changes with the help of setState()
// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ajeet Singh",
//       age: 29,
//     };
//   }

//   changeData(){
//     //   this.setState we use to update the value of state
//       this.setState({
//           name : "Suhil"
//       })
//   }
//   render() {
//     return (
//       <>
//       {/* create a button and apply onclick event thats the syntax for creating events */}
//       <button type="button" onClick={() => this.changeData()} >Update</button>
//         <p> Name: {this.state.name}</p>
//         <p> age : {this.state.age}</p>
//       </>
//     );
//   }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));



// add props in state 
export default class Index extends Component {
    // Note you must have to use props in constructor to read the props in state
    constructor(props) {
      super(props);
      this.state = {
        name: "Ajeet Singh",
        age: 29,
        email: this.props.email
      };
    }
  
    changeData(){
      //   this.setState we use to update the value of state
        this.setState({
            name : "Suhil",
            age: 32,
            email: "suhil.patel009@gmail.com"
        })
    }
    render() {
      return (
        <>
        {/* create a button and apply onclick event thats the syntax for creating events */}
        <button type="button" onClick={() => this.changeData()} >Update</button>
          <p> Name: {this.state.name}</p>
          <p> age : {this.state.age}</p>
          <p> email: {this.state.email}</p>

        </>
      );
    }
  }
  
  ReactDOM.render(<Index  email="abc@gmail.com"/>, document.getElementById("root"));
  

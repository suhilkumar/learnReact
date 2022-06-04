// import React, { Component } from "react";

// export class Header extends Component {
//   render() {
//     return <div>Header</div>;
//   }
// }
// export class Footer extends Component {
//   render() {
//     return <div>Footer</div>;
//   }
// }

// export class Content extends Component {
//   render() {
//     return <div>Suhil content </div>;
//   }
// }

// // Note: if you dont want to write named export on bottom you can write export on class 

import React, { Component } from 'react';

class Student extends React.Component {
  constructor(){
    super()
    // this.objSub = {
    //   subject: "Math"
    // }
// this is not a recommended approach you must always use state 

this.state = {
  subject:"math",
  age: 28,
  name : "Suhilkumar"
}
  }

  render() {
    return <h2>I am {this.state.name}, my age is {this.state.age} and I am Poor Student in {this.state.subject}</h2>;
  }
}

export {Student}
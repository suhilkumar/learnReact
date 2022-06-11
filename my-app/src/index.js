import React, { Component } from "react";
import ReactDOM from "react-dom";

// syntax
// eventName = {functionName}

// lets take a example of onclick event showing a alert message in function component

// function showMsg(){
//     alert("Hi Rucha learning events in react")
// }

// function Index (){
//     return(
//         <>
//         <button type="button" onClick={showMsg}>press</button>
//         </>
//     )
// }

// ReactDOM.render(<Index/>,document.getElementById("root"))

// class based component in react but notice 1 diff we use this keyword for function
// class Index extends Component {
//   showMsg() {
//     alert("Hi Rucha learning events in react");
//   }

//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.showMsg}>
//           press
//         </button>
//       </>
//     );
//   }
// }
// ReactDOM.render(<Index />, document.getElementById("root"));

// Example of creating a url and alert message
// function showMsg(e){
//     // sythentic events arr used for stopping the url 
//     e.preventDefault();
//     alert("Hi Rucha learning events in react")
// }

// function Index (){
//     return(
//         <>
//         <a href="google.com" onClick={showMsg}>click</a>
//         </>
//     )
// }

// ReactDOM.render(<Index/>,document.getElementById("root"))
import React from 'react';
import ReactDOM from 'react-dom';
// // create a functional component
// function Greeting(){
//   return (
//     <p>Hi Suhil,</p>
//   )
// }

// // create another component and pass greeting component inside this component
// function Index() {
//   return (
//     <div>
//       <Greeting />
//     </div>
//   )
// }

// // render this component
// ReactDOM.render(<Index/>, document.getElementById("root"))

// above was not a recommended approach now we use props 

// now we use props and pass arguments with props
// You declare the values in parent component and pass in child components as props 

function Greeting (props){
  return(
    <p>Hi {props.name}, my age is {props.age}</p>
  )
}
function Index(){
  return(
    <>
    <Greeting name="Suhil" age="32" />
    <Greeting name="Rucha" age="27" />
    </>
  )
}
ReactDOM.render(<Index/>, document.getElementById("root"))
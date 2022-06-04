import React from "react";
import ReactDOM from "react-dom";

function Employee(props) {
  return (
    // boolean value doesn't show in react you have to use condition operator or ternary operator
    <div>
      Hi {props.name}, my age is {props.age}
      <h3> Your gender: {props.gender === true ? "Male": "Female"}</h3>
      <h4>do you have a child : {props.isChild === true ? "yes":"no"}</h4>
    </div>
  );
}
// note : for any data types other then string you must use curly brackets
ReactDOM.render(
  <Employee name="Suhil"
   age={28} 
   gender = {true}
   isChild = {false}/>,
  document.getElementById("root")
);

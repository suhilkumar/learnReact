import React from 'react';
import ReactDOM from 'react-dom';

function Employee (props){
  return (
    <div>Hi {props.name}, my age is {props.age}</div>
  )
}
// note : for any data types other then string you must use curly brackets
ReactDOM.render(<Employee name="Suhil" age={28}/>, document.getElementById("root"))
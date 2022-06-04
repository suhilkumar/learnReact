import React from "react";
import ReactDOM from "react-dom";

let friends = ["suhil", "rucha", "kirtan"];
let studentInfo = { mobile: 9125969819, email: "suhil.patel009@gmail.com" };
function Employee(props) {
  return (
    <div>
      <h2>your name is {props.name}</h2>
      <h3> your age is {props.age}</h3>
      <h4> your friend :
          <ul>
            {
            props.friend.map(function namePrint(item, i){
              return <li  key={i}>{item}</li>
            })
            }
          </ul>
      </h4>
      <h3> your info : {props.info.mobile}</h3>
      <h3> your info : {props.info.email}</h3>
    </div>
  );
}

ReactDOM.render(
  <Employee name="Patel" age={32}
  friend= {friends} info={studentInfo}/>,
  document.getElementById("root")
);

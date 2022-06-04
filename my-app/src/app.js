import React from 'react';

export default function Employee(props) {
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
      {/* use parenthesis when you want to call the function  */}
      <h3> function : {props.fun()}</h3>
      <h3> function MSG : {props.funMsg("MESSAGE")}</h3>
      <h3> function : {props.funSum(10,20)}</h3>
    </div>
  );
}
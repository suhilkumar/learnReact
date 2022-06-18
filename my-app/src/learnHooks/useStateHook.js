// Rules for Hooks
// only call hooks at the top level
// only call hooks in react component
import React, { useState } from "react";
import ReactDOM from "react-dom";

// // create a simple function component and use UseState Hook to assign a value
// function Name(){
//     const nameStateVariable = useState("Ajeet")
//     console.log(nameStateVariable)

// return(
//     <>
//     <h3> My name is {nameStateVariable[0]}</h3>
//     </>
// )
// }

// ReactDOM.render(<Name/>,document.getElementById("root"))

// we need to update the value
// function Name(){
//     const nameStateVariable = useState("Ajeet")
//     // console.log(nameStateVariable)
//     nameStateVariable[1]("chandan kumar")
//     // this will throw an error because it re-render too many times
// return(
//     <>
//     <h3> My name is {nameStateVariable[0]}</h3>
//     </>
// )
// }

// ReactDOM.render(<Name/>,document.getElementById("root"))

// create onClick event and try change the value in Name Component
// function Name(){
//     const nameStateVariable = useState("Ajeet")
//     // console.log(nameStateVariable)

//     const clickHandle = () => {
//         nameStateVariable[1]("chandan")
//     }
// return(
//     <>
//     <h3> My name is {nameStateVariable[0]}</h3>
//     <button type='button' onClick={clickHandle}>Change</button>
//     </>
// )
// }

// ReactDOM.render(<Name/>,document.getElementById("root"))

// other examples for useState Hooks

// function Name() {
//   const nameStateVariable = useState("Ajeet");
//     const name = nameStateVariable[0];
//     const setName = nameStateVariable[1];

//     const clickHandle = () =>{
//         setName("Suhil")
//     }
//   return (
//     <>
//       <h3> My name is {nameStateVariable[0]}</h3>
//       <button type="button" onClick={clickHandle}>change</button>
//     </>
//   );
// }

// ReactDOM.render(<Name />, document.getElementById("root"));

// use destructuring array for useState hooks

// function Name() {
//   const nameStateVariable = useState("Ajeet");
//      const[ name, setName ] = nameStateVariable;  //destructuring

//     const clickHandle = () =>{
//         setName("Suhil")
//     }
//   return (
//     <>
//       <h3> My name is {name}</h3>
//       <button type="button" onClick={clickHandle}>change</button>
//     </>
//   );
// }

// ReactDOM.render(<Name />, document.getElementById("root"));

// Syntax for using hooks
// function Name() {
//      const[ name, setName ] = useState("Ajeet");//destructuring

//     const clickHandle = () =>{
//         setName("Suhil")
//     }
//   return (
//     <>
//       <h3> My name is {name}</h3>
//       <button type="button" onClick={clickHandle}>change</button>
//     </>
//   );
// }

// ReactDOM.render(<Name />, document.getElementById("root"));

// lets add some more values in useState hooks

// function Name() {
//      const[ name, setName ] = useState("Ajeet");// note you can use multiple useState Hooks
//     const [email, setEmail] = useState("ajeetsingh@gmail.com")
//     const clickHandle = () =>{
//         setName("Suhil")
//         setEmail("suhil.patel009@gmail.com")
//     }
//   return (
//     <>
//       <h3> My name is {name}</h3>
//       <h3> My email is {email}</h3>
//       <button type="button" onClick={clickHandle}>change</button>
//     </>
//   );
// }

// ReactDOM.render(<Name />, document.getElementById("root"));
// create an example of show text less and more with the help of hooks

function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <b>
          <a onClick={ () => setHidden(false)}> read more</a>
        </b>
      ) : (
        <b>
          <a onClick={() => setHidden(true)}> read less</a>
        </b>
      )}
    </>
  );
}

ReactDOM.render(
  <LessText
    maxLength={20}
    text={`Suhil your a good boy you must start 
setting goal for yourself and please work on it otherwise you will never be able to 
achieve more in life`}
  />,
  document.getElementById("root")
);

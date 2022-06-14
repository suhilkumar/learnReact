import React from "react";
import ReactDOM from "react-dom";
const people = [{ name: "Suhil" }, { name: "Rucha" }, { name: "Kirtan" }];
// regular map
// function Index(){
//   return(
//     <>
//     {
//       people.map(person => <p key={person.name}>{person.name}</p>)
//     }
//     </>
//   )
// }
function Index() {
  return (
    <>
      {people.map((person) => {
        // if you use curly brackets then you have to use return
        return <p key={person.name}>{person.name}</p>;
      })}
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

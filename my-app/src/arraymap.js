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
// function Index() {
//   return (
//     <>
//       {people.map((person) => {
//         // if you use curly brackets then you have to use return
//         return <p key={person.name}>{person.name}</p>;
//       })}
//     </>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

// lets say if you have same value repeating in a object
// import React from "react";
// import ReactDOM from "react-dom";
// const people = [
//   { name: "Suhil" },
//   { name: "Rucha" },
//   { name: "Kirtan" },
//   { name: "Kirtan" },
// ];
// // regular map
// // function Index(){
// //   return(
// //     <>
// //     {
// //       people.map(person => <p key={person.name}>{person.name}</p>)
// //     }
// //     </>
// //   )
// // }
// function Index() {
//   return (
//     <>
//       {/* if you dont have a id you can create another
//        variable index as id so all the keys should be unique */}
//       {people.map((person, id) => {
//         // if you use curly brackets then you have to use return
//         //
//         return <p key={id}>{person.name}</p>;
//       })}
//     </>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

import React, { createContext, Component } from "react";
import ReactDOM from "react-dom";
// create 3 component and name them Student3,2,1,
// pass them inside one another
// create an Index component and render it

// const myContext = createContext();
// const Student3 = () => {
//   return (
//     <>
//       <myContext.Consumer>
//         {(data) => {
//           return <h1>Hello {data.name}</h1>;
//         }}
//       </myContext.Consumer>
//     </>
//   );
// };

// const Student2 = () => {
//   return (
//     <>
//       <myContext.Consumer>
//         {(data) => {
//           return (
//             <>
//               <h2>Age is {data.age}</h2>
//               <Student3 />
//             </>
//           );
//         }}
//       </myContext.Consumer>
//     </>
//   );
// };

// const Student1 = () => {
//   return (
//     <>
//       <myContext.Consumer>
//         {(data) => {
//           return (
//             <>
//               <h1> Email is {data.email}</h1>
//               <Student2 />
//             </>
//           );
//         }}
//       </myContext.Consumer>
//     </>
//   );
// };
// // function Index() {
// //   return <myContext.Provider value={"Suhilkumar"}>
// //     <Student1 />
// //   </myContext.Provider>
// // }

// // note you can also pass an object instead of string
// function Index() {
//   return (
//     <myContext.Provider
//       value={{ name: "Suhilkumar", age: 29, email: "Suhil.patel009@gmail.com" }}
//     >
//       <Student1 />
//     </myContext.Provider>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));


// lets use context in class based component 
// const myContext = createContext();
// class Student3 extends Component {
//   static contextType = myContext;
//   render() {
//     return (
//       <>
//         <h1>Hello{this.context.name}</h1>
//         <h2>age is {this.context.age}</h2>
//       </>
//     );
//   }
// }
// class Student2 extends Component {
//   render() {
//     return (
//       <>
//         <Student3 />
//       </>
//     );
//   }
// }
// class Student1 extends Component {
//   render() {
//     return (
//       <>
//         <Student2 />
//       </>
//     );
//   }
// }
// class Index extends Component {
//   render() {
//     return (
//       <>
//          <myContext.Provider
//       value={{ name: "Suhilkumar", age: 29, email: "Suhil.patel009@gmail.com" }}
//     >
//       <Student1 />
//     </myContext.Provider>
//       </>
//     );
//   }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

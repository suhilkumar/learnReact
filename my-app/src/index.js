import React from "react";
import ReactDOM from "react-dom";

// If you want to apply checkers in props you use propstype
// SAMPLE FUNCTION COMPONENT
// function Sidebar(props) {
//   return <div> {props.children}</div>;
// }

// ReactDOM.render(
//   <Sidebar>
//     <nav>
//       <a href='#'> Home </a>
//       <a href='#'> About </a>
//       <a href='#'> Content</a>
//     </nav>
//   </Sidebar>,
//   document.getElementById("root")
// );

// PROPS TYPE

import propTypes from "prop-types";

Emp.propTypes = {
    name: propTypes.string,
}
function Emp(props) {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
      <h3>age: {props.age}</h3>
    </div>
  );
}

ReactDOM.render(<Emp name="Suhil" age={29}/>, document.getElementById("root"));

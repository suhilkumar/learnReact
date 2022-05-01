// import ReactDom from "react-dom";
// import element from "./app.js";
// this is jsx code means html inside js
// let element = <h1> Welcome to Sahosoft </h1>
// ReactDom.render(
//     element, document.getElementById('root')
// );
// ReactDom.render(element, document.getElementById("root"));

// this is with the help of react code
// in react createElement you pass 3 parameters 1 tag name ,
// 2 is prop,
// 3 is content you can either store content in variable and use it
// let element = React.createElement("h1", null, "suhil learning react");
// let element1 = React.createElement("div", null, element);
// ReactDom.render(element1, document.getElementById("root"));

// ReactDom.render(element, document.getElementById("root"))

// import reactDom from "react-dom"
// import App from './app.js'

// reactDom.render(<App />, document.getElementById('root'))

// JSX
// import { createElement } from "react";
// import ReactDom from "react-dom";

// let element = createElement("h1", null, "Suhil");
// ReactDom.render(element, document.getElementById("root"));

import App from './app.js'
import ReactDom from 'react-dom'

ReactDom.render(
    <App/>,document.getElementById("root")
)
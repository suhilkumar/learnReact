// USING HTML ATTRIBUTES IN JSX
/*
    make sure to use camelCasing while you use attributes because
    in js class is already a reserved word 
    you can also create a custom attributes but you have to 
    use data- as prefix
*/
// import React from 'react'
// // you have to create a object in order to use css
// let myStyles = {
//     fontSize : 100,
//     color: 'blue'
// }
// let element = <h1 style={myStyles}>Hi suhil</h1>
// export default element;

// lets make it in class
import React, { Component } from "react";
export default class App extends Component {
  render() {
    let myStyles = {
            fontSize : 100,
            color: 'red'
        }
    return <div>
        <h1 style={myStyles}>Hi Suhil</h1>
    </div>;
  }
}

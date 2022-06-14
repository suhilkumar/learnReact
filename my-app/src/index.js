import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hi Suhil</h1>
        <h2>use scss</h2>
        <h3>instead of css</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));

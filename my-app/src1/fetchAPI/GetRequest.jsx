import React, { Component } from "react";

export default class GetRequest extends Component {
  constructor() {
    super();
    this.state = {
      totalRow: 0,
    };
  }

  componentDidMount() {
    fetch("http://sahosoftweb.com/api/ProductMaster/GetProductList")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          totalRow: data.length,
        });
      });
  }
  render() {
    return (
      <div>
        <h2>Simple Get Request</h2>
        <div>total Records : {this.state.totalRow}</div>
      </div>
    );
  }
}

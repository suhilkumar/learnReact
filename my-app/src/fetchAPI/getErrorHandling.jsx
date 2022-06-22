import React, { Component } from 'react'

export default class GetErrorHandling extends Component {
 
    constructor(){
        super();
        this.state ={
            totalRow : 0,
            errMsg : ""
        }
    }
    // why use async await 
    // to resolve .then .then we use async await
async componentDidMount() { 
    
    const response = await fetch("http://sahosoftweb.com/api/ProductMaster/GetProductList");
    const data = await response.json();
    console.log(data)
    this.setState({
        totalRow: data.length
    })
 }
 render() {
    return (
      <div>
        <h2>with the help of async and await</h2>
        <div>total Records : {this.state.totalRow}</div>
      </div>
      
    );
  }
}
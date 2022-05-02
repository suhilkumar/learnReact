import React, { Component } from 'react'
import reactDom from 'react-dom'
// if you want to import multiple file you can import in curly brackets with the help of ,
import {Header, Content, Footer} from './app'
  

  class Index extends Component {
  render() {
    return (<div>
        <Header />
        <Content />
        <Footer />
        
        </div>)
  }
}

reactDom.render(<Index />, document.getElementById("root"))
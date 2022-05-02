import React, { Component } from 'react'
import reactDom from 'react-dom'

  class Header extends Component {
  render() {
    return (
      <div>Header</div>
    )
  }
}
  class Footer extends Component {
  render() {
    return (
      <div>Footer</div>
    )
  }
}

  class Content extends Component {
  render() {
    return (
      <div>Suhil content </div>
    )
  }
}

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
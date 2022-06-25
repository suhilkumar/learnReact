import React from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
 function App(props) {
  return (
    <div>
        <h1>App Component</h1>
        <p>My name is {props.myName}</p>
    </div>
  )
}


const mapStateToProps = (state) => {
return {
    myName : state.name
}

}

export default connect(mapStateToProps)(App)
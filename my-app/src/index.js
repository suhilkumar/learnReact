import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Student extends Component {
    render() {
        return <h2> Class Component</h2>
    }
}

ReactDOM.render(<Student />, document.getElementById("root"))
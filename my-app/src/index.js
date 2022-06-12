import React from 'react';
import ReactDOM from 'react-dom';

// Composing Component

function Welcome(props){
    return (
        <h1>Hello, {props.name}</h1>
    )
}

function Index(){
    return (
        <>
        <Welcome name="Suhil" />
        <Welcome name="Arpil" />
        
        </>
    )
}

ReactDOM.render(<Index/>, document.getElementById("root"))
import React from 'react';
import ReactDOM from 'react-dom';

let isShow = true;

let element = isShow === true ? <div>
    <h1>Suhil, its true!</h1>
</div>: 'No Element';

ReactDOM.render(element, document.getElementById("root"))
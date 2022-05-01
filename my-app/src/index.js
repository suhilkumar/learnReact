import React from "react";
import ReactDOM from "react-dom";


let suhil = {
    "fontFamily": 'Courier New',
    "fontSize": "larger",
    "color": "aqua"
}
let element = (
    <div>
      <h1 style = {suhil} >Rucha</h1>
      {/* to use a variable you have to use { } curly brackets*/}

    </div>
  );
  

ReactDOM.render(element, document.getElementById("root"));

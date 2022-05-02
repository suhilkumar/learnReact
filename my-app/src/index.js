// HOW TO LOOP IN JSX 
import React from "react";
import ReactDOM from "react-dom";

const names = ["Suhil", "Rucha", "kirtan"]

const nameList = [];
for(const [index, value] of names.entries()){
    nameList.push(<li key={index}>{value}</li>);
    
}
ReactDOM.render(<ul>{nameList}</ul>, document.getElementById("root"));

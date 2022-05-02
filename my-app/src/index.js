// HOW TO LOOP IN JSX 
import React from "react";
import ReactDOM from "react-dom";

const names = ["Suhil", "Arpil","Rucha", "kirtan"]

// const nameList = [];
// for(const [index, value] of names.entries()){
//     nameList.push(<li key={index}>{value}</li>);
    
// }
// ReactDOM.render(<ul>{nameList}</ul>, document.getElementById("root"));
 
// Now lets try in map method

const nameList = <ul>
    {names.map((v,i) => {
        return <li key={i}> {v}</li>
    })}
</ul>

ReactDOM.render(nameList, document.getElementById("root"))
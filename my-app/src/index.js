//  && operator

import React from "react";
import ReactDOM from "react-dom";

// function Index() {
//   return <>{ (5>2) && alert("Hi Suhil")}</>;
// //   if 5 is grater then 2 and then only alert function will execute
// // if left side condition is true then after && it executes
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

function MailBox(props) {
  const unReadMsg = props.unReadMessage;

  return (
    <>
      <h1> Inbox</h1>

      {
      unReadMsg.length > 0 && <h2> you have {unReadMsg.length} unread message</h2>
      }
    </>
  );
}

const Message = ["suhil", "Rucha"];

ReactDOM.render(
  <MailBox unReadMessage={Message} />,
  document.getElementById("root")
);

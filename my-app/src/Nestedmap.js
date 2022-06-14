import React from "react";
import ReactDOM from "react-dom";
const people = [
  {
    name: "Suhil",
    course: [
      { name: "ReactJs", type: "Paid" },
      { name: "NodeJs", type: "free" },
    ],
  },
  {
    name: "Rucha",
    course: [
      { name: "ReactJs", type: "free" },
      { name: "NodeJs", type: "paid" },
    ],
  },
];

function Index() {
  return (
    <>
      {people.map((person, id) => {
        return (
          <div key={id}>
            <h2>{person.name}'s Course</h2>
            <div>
              {person.course.map((c, i) => {
                return (
                  <p key={i}>
                    {c.name} is {c.type}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

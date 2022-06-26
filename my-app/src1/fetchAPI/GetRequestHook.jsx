import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function GetRequests() {
  const [totalRow, setTotalRow] = useState(0);

  useEffect(() => {
    fetch("http://sahosoftweb.com/api/ProductMaster/GetProductList")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTotalRow(data.length);
      });
  }, []);
  return (
    <div>
      <h3>Simple Get request with react Hooks</h3>
      <div>total Records : {totalRow} </div>
    </div>
  );
}
export default GetRequests;

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// function Index() {
//   const [count, setCount] = useState(0);

//   const clickHandle = () => {
//     setCount(count + 1);
//     console.log(count)
//   };
//   useEffect(() => {
//     console.log('useEffect called')
//   })
//   return (
//     <>
//       <h2> count : {count}</h2>

//       <button type="button" onClick={clickHandle}>
//         Click
//       </button>
//     </>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

// lets call just for component did mount then after callback just past an empty array
// function Index() {
//   const [count, setCount] = useState(0);

//   const clickHandle = () => {
//     setCount(count + 1);
//     console.log(count)
//   };
//   useEffect(() => {
//     console.log('useEffect called')
//   },[])  //Just pass an empty array now it wont trigger twice basically works like componentdidmount
//   return (
//     <>
//       <h2> count : {count}</h2>

//       <button type="button" onClick={clickHandle}>
//         Click
//       </button>
//     </>
//   );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));
// with the help of array it will only trigger when component mount but not when component update
// function Index() {
//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);
  
//     const clickHandle = () => {
//       setCount(count + 1);
//       setCount2(count2 + 2);
//     };
//     useEffect(() => {
//       console.log('useEffect called')
//     }, [])
//     return (
//       <>
//         <h2> count : {count}</h2>
//         <h2> count2 : {count2}</h2>
  
//         <button type="button" onClick={clickHandle}>
//           Click
//         </button>
//       </>
//     );
//   }
  
//   ReactDOM.render(<Index />, document.getElementById("root"));

//let say you only want useEffect for 2nd value 

// Answer is whatever you  want to trigger useEffect take that value and
// pass it in that array 
// function Index() {
//         const [count, setCount] = useState(0);
//         const [count2, setCount2] = useState(0);
      
//         const clickHandle = () => {
//           setCount(count + 1);
//         };
      
//         const clickHandle2 = () => {
//           setCount2(count2 + 2);
//         };
//         useEffect(() => {
//           console.log('useEffect called')
//         }, [count])
//         return (
//           <>
//             <h2> count : {count}</h2>
//             <h2> count2 : {count2}</h2>
      
//             <button type="button" onClick={clickHandle}>
//               Click
//             </button>
//             <button type="button" onClick={clickHandle2}>
//               Click2
//             </button>
//           </>
//         );
//       }
      
//       ReactDOM.render(<Index />, document.getElementById("root"));


// lets see for count2 
function Index() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
    const clickHandle = () => {
      setCount(count + 1);
    };
  
    const clickHandle2 = () => {
      setCount2(count2 + 2);
    };
    useEffect(() => {
      console.log('useEffect called')
    }, [count2])
    return (
      <>
        <h2> count : {count}</h2>
        <h2> count2 : {count2}</h2>
  
        <button type="button" onClick={clickHandle}>
          Click
        </button>
        <button type="button" onClick={clickHandle2}>
          Click2
        </button>
      </>
    );
  }
  
  ReactDOM.render(<Index />, document.getElementById("root"));
import  { useState } from "react";

// create a customhook make sure all hooks start with use keywords
// return object
// function useCustom() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return { count, handleIncrement };
// }

// export default useCustom;



function useCustom() {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    return [ count, handleIncrement ]
  }
  
  export default useCustom;
  
import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // when you refresh the page, the count will be reset to 0
    //and then trigger 1 is log to console
    console.log('trigger 1');

    if (count > 1){
      document.title = `You clicked ${count} times`;
    }

    //*this return is previous form before dependency array 
    // return () => {
    // console.log('button clicked and now call the trigger 1');
    // }

  },[count]); // if you pass an empty array, it will run only once
  


  return <>
  <h2>{count}</h2>

  {/*when you click the button the count increase, and you trigger re render to trigger 1  */}
  <button onClick={() => setCount(count + 1)}>Add Number</button>
  </>;
};

export default UseEffectBasics;

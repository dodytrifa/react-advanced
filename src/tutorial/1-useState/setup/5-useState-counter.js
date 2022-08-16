import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  function addNumber () {
    // let count = 0;
    setCount(count + 1)
  }

  function subtractNumber () {
    // let count = 0;
    setCount(count - 1)
  }
  
  return (
    <>
      <h3>Count: {count}</h3>
      <button className='btn' onClick={addNumber}>Add Number</button>
      <button className='btn' onClick={subtractNumber}>Substract Number</button>
    </>
  )
};

export default UseStateCounter;

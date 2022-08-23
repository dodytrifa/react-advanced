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
  
  const delayCounter = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }

  return (
    <>
    <section>
      <h3>Count: {count}</h3>
      <button className='btn' onClick={addNumber}>Add Number</button>
      <button className='btn' onClick={subtractNumber}>Substract Number</button>
      
    </section>
    <section>
      <h3>Delay Counter: {count}</h3>
        <button className='btn' onClick={delayCounter}>
          Delay increase
        </button>
    </section>
    </>
  )
};

export default UseStateCounter;

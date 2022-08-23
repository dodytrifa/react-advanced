import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)//default function to see windows size  

  useEffect(() => {

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)

    //below is cleanup function from "removeEventListener"
    //clean up is important to avoid memory leak
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])//cleanup function

  return <>

    <h1>You See a window size of:</h1>
    <h1>{windowSize}</h1>
  </>;
};

export default UseEffectCleanup;

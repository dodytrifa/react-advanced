import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
    role: 'developer'
  })

  function changeName() {
    setPerson({
      ...person,
      name: 'Jane'
    })
    
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Role: {person.role}</h3>
      <button className='btn' onClick={changeName}>Change Name</button>
    </>
  ) 
};

export default UseStateObject;

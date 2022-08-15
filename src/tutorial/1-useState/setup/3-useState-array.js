import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  //set your zero state here
  // const [people, setPeople] = useState([]);// you can use React.useState([]) instead of useState([])

  const [people, setPeople] = useState(data)

  // filter returns a new array
  const handleDelete = (id) => {
    setPeople(people.filter(person => person.id !== id))
  }

  return (
    <>
    {people.map(person =>{
        const { id, name } = person;
        return (
          <>
          <p key={id} className='item'>{id}. {name}</p>
          <button className='btn' onClick={()=> handleDelete(id)}>Clear name</button>
          </>
        )
      } )
    }
    
    <button className='btn' onClick={()=>setPeople([])}>Clear items</button>
    </>
    //to avoid re render we should input anonyme function inside onclick
  )
};

export default UseStateArray;

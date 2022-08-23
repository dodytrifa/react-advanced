import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const res = await fetch(url);

    const data = await res.json();
    //1.check with console.log(data)
    // console.log(data);;
    
    //! 2. dont go straight to setUsers(data), it will cause an infinite loop
    //setUsers(data)

    // 3. useEffect will run after the component is rendered
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
    <h2>Github Users:</h2>
    <ul className='users'>
      {users.map(user => {
        const { id,login, avatar_url, html_url } = user
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        )
      })}
    </ul>
    </>

  )
    
  
};

export default UseEffectFetchData;

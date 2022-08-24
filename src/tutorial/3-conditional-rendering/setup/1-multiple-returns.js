import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { name } = user;
        console.log(user);
        setUser(name);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  
  //1st return
  if(loading) {
    return <div>Loading...</div>
  }
  
  // 2nd return
  if(isError) {
    return <div>Error...</div>
  }

  // 3rd return
  return <h2>{user}</h2>;
};

export default MultipleReturns;

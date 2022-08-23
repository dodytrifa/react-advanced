import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if(loading) {
    return <div>Loading...</div>
  }

  return <h2>This text show up when Loading is False</h2>;
};

export default MultipleReturns;

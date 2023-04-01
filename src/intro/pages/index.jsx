import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <Link to="/gpt3">GPT-3</Link>
        <Link to="/restaurant">Restaurant</Link>
      </ul>
    </div>
  );
};

export default index;

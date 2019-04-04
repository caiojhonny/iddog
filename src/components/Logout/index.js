import React from 'react';
import './index.scss';

const Logout = ({ logout }) => {
  return (
    <button className="logout" onClick={() => logout()}>Logout</button>
  )
}

export default Logout;
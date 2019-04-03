import React from 'react';
import './styles/Logout.scss';

const Logout = ({ logout }) => {
  return (
    <button className="logout" onClick={() => logout()}>Logout</button>
  )
}

export default Logout;
import React from 'react';
import './index.scss';

const ImageNav = ({ changeImage }) => {

  return (
    <nav className="img-nav">
        <button className="img-nav-btn" onClick={() => changeImage('prev')}>Prev</button>
        <button className="img-nav-btn" onClick={() => changeImage('next')}>Next</button>
    </nav>    
  )
}

export default ImageNav;
import React from 'react';
import './styles/Dog.scss';

const Dog = ({ image }) => {
  const style = { backgroundImage: `url(${image})` };

  return (
    <button style={style} className="dog"></button>
  )
}

export default Dog;
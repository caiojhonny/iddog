import React from 'react';
import './styles/Dog.scss';

const Dog = ({ image, id, category }) => {
  const style = { backgroundImage: `url(${image})` };
  const href = `feed?category=${category}&id=${id}`;

  return (
    <a style={style} href={href} className="dog"><span className="hidden">{category} Dog</span></a>
  )
}

export default Dog;
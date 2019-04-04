import React from 'react';
import './index.scss';

function Dog({image, id, category, props}) {
  const style = { backgroundImage: `url(${image})` };

  function viewDog(id, category){
    props.history.push({
      pathname: '/feed',
      search: `?category=${category}&id=${id}`
    })
  }

  return (
    <button style={style} className="dog" onClick={() => viewDog(id, category)}><span className="hidden">{category} Dog</span></button>
  )
}

export default Dog;
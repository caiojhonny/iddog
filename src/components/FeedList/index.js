import React from 'react';
import Dog from '../Dog';
import queryString from 'query-string'
import './index.scss';

const FeedList = ({ dogs, category, props }) => {
  let params = queryString.parse(props.location.search)
  
  if(params.id !== undefined){
    const dogFiltered = dogs[params.id];
    const alt = `${category} Dog`;
    return (
      <img src={dogFiltered} alt={alt} className="img-dog" />
    )
  }else{
    return (
      <section className="feed-list">
        {dogs.map((image, index) => <Dog key={index} id={index} image={image} category={category} props={props} /> )}
      </section>  
    )
  }
}

export default FeedList;
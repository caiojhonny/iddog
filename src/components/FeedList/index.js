import React from 'react';
import Dog from '../Dog';
import queryString from 'query-string'
import './index.scss';

const FeedList = ({ dogs, category, isLoading, parentProps }) => {
  let params = queryString.parse(parentProps.location.search)
  
  if (isLoading) {
    return (<p>loading...</p>)
  }

  if (params.id !== undefined) {
    const dogFiltered = dogs[params.id];
    const alt = `${category} Dog`;
    return (
      <img src={dogFiltered} alt={alt} className="img-dog" />
    )
  } else {
    return (
      <section className="feed-list">
        {dogs.map((image, index) => <Dog key={index} id={index} image={image} category={category} {...parentProps} /> )}
      </section>  
    )
  }
}

export default FeedList;
import React from 'react';
import styled from '@emotion/styled';
import queryString from 'query-string';

import Dog from '../Dog';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`

const Img = styled.img`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`

const FeedList = ({ dogs, category, isLoading, parentProps }) => {
  let params = queryString.parse(parentProps.location.search)
  
  if (isLoading) {
    return (<p>Loading...</p>)
  }

  if (params.id !== undefined) {
    const dogFiltered = dogs[params.id];
    const alt = `${category} Dog`;
    return (
      <Img src={dogFiltered} alt={alt} />
    )
  } else {
    return (
      <Section>
        {dogs.map((image, index) => <Dog key={index} id={index} image={image} category={category} {...parentProps} /> )}
      </Section>  
    )
  }
}

export default FeedList;
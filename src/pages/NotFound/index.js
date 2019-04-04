import React from 'react'
import styled from 'styled-components';

import Page from '../../components/Page';

const Title = styled.h1`
  width: 100%;
  font-size: 2em;
  margin: 2em 0;
`;

const NotFound = () =>{
    return(
        <Page>
            <Title>Page not found</Title>
        </Page>
    )
} 

export default NotFound
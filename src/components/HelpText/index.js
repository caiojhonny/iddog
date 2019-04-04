import React from 'react';
import styled from '@emotion/styled'

const Span = styled.span`
  width: 100%;
  font-size: .6em;
  opacity: .4;
`;

const HelpText = ({ msg }) => {
  return (
      <Span>{ msg }</Span>
  )
}


export default HelpText;
import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  position: absolute;
  right: 1.5em;
  top: 1.5em;
  background-color: transparent;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: .6;
  transition: all .1s linear;
  :hover{
    opacity: 1;
  }
`

const Logout = ({ logout }) => {
  return (
    <Button onClick={() => logout()}>Logout</Button>
  )
}

export default Logout;
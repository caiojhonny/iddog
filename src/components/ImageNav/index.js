import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  max-width: 300px;
  width: 100%;
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  letter-spacing: 2px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
`

const ImageNav = ({ changeImage }) => {

  return (
    <Nav>
        <Button onClick={() => changeImage('prev')}>Prev</Button>
        <Button onClick={() => changeImage('next')}>Next</Button>
    </Nav>    
  )
}

export default ImageNav;
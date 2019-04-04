import React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';

const Nav = styled.nav`
  width: 100%;
  text-align: center;
  padding: 2em;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  opacity: 0.4;
  letter-spacing: 2px;
  padding: 1em 0;
  outline: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  font-weight: 500;
  font-size: .8em;
  color: black;
  text-decoration: none;
  transition: all .1s linear;
  :hover{
    opacity: .7;
  }
  :last-child:after{
    display: none;
  }
`

const Span = styled.span`
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  opacity: .5;
`

const CategoryNav = ({ category, getList }) => {

  return (
    <Nav>
        <Button className={css([category === 'husky' && {opacity: '1'}])} onClick={() => getList('husky')}>Husky</Button>
        <Span>/</Span>
        <Button className={css([category === 'hound' && {opacity: '1'}])} onClick={() => getList('hound')}>Hound</Button>
        <Span>/</Span>
        <Button className={css([category === 'pug' && {opacity: '1'}])} onClick={() => getList('pug')}>Pug</Button>
        <Span>/</Span>
        <Button className={css([category === 'labrador' && {opacity: '1'}])} onClick={() => getList('labrador')}>Labrador</Button>
    </Nav>    
  )
}

export default CategoryNav;
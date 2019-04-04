import React from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  width: 300px;
  height: 200px;
  margin: 15px;
  background-color: #ccc;
  background-position: center center;
  background-size: cover;
  outline: none;
  transition: all .1s linear;
  cursor: pointer;
  :hover{
    transform: translateY(-3px);
  }
`;

const Span = styled.span`
  display: none;
`

function Dog({ image, id, category, history }) {
  const style = { backgroundImage: `url(${image})` };

  function viewDog(id, category){
    history.push({
      pathname: '/feed',
      search: `?category=${category}&id=${id}`
    })
  }

  return (
    <Button style={style} onClick={() => viewDog(id, category)}><Span>{category} Dog</Span></Button>
  )
}

export default Dog;
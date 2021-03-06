import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  text-align: center;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,.1);
  width: 100%;
  outline: none;
  font-size: .8em;
`;

const SignUpInput = () => {
  return (
      <Input placeholder="your email" type="email" id="email" name="email" required autoFocus />
  )
}


export default SignUpInput;
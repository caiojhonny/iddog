import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Global, css } from "@emotion/core"

const App = styled.div`
  padding: 4em 0 1em;
  max-width: 1000px;
  position: relative;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 5px;
`

const Wrapper = styled.div`
  height: '100%',
  flex: 1,
  padding: '0 1rem;'
`

const Strong = styled.strong`
  font-weight: bold;
`

const Small = styled.small`
  opacity: .6;
  font-size: .8em;
  margin: 2em 0 0;
  display: block;
`

export default function Page({ children }) {

  return (
    <Fragment>
      <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
        @import 'reset-css';

        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
      <App>
        <Title>
          The <Strong>IDDOG</Strong>
        </Title>
        <Wrapper>{children}</Wrapper>
        <Small>© the iddog, all rights reserved.</Small>
      </App>
    </Fragment>
  )
}
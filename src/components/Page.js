import React, { Fragment } from 'react'
import styled from 'styled-components';
import './styles/Page.scss';

const Wrapper = styled.div`
  height: '100%',
  flex: 1,
  padding: '0 1rem;'
`

export default function Page({ children }) {

  return (
    <Fragment>
      <div className="app">
        <h1 className="title-app">
          The <strong>IDDOG</strong>
        </h1>
        <Wrapper>{children}</Wrapper>
        <small className="footer">© iddog, all rights reserved.</small>
      </div>
    </Fragment>
  )
}
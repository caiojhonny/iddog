import React, { Component } from 'react';
import styled from '@emotion/styled'

import SignUpInput from '../../components/SignUpInput';
import HelpText from '../../components/HelpText';
import Page from '../../components/Page';

const Form = styled.form`
  width: 100%;
  max-width: 300px;
  margin: 2em auto;
`

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'The IDDOG | Sign Up';
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('https://api-iddog.idwall.co/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.get('email'),
      }),
    })
    .then(response => response.json())
    .then(jsondata => {
      sessionStorage.setItem('token', jsondata.user.token);
      this.props.history.push('/feed');
    })
  }

  render(){
    return (
      <Page>
        <Form className="signup-form" onSubmit={this.handleSubmit}>
          <SignUpInput />
          <HelpText msg="press enter to submit" />
        </Form>
      </Page>
    )
  }
}

export default SignUp;
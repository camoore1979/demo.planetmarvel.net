import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import connect from '../../store/connect';
import LogoImage from '../LogoImage';
import SiteCopyRight from '../SiteCopyright';
import useDocSubTitle from '../../hooks/useDocSubTitle';
import './login.css';

// import AppContext from '../../AppContext';

const Login = props => {
  useDocSubTitle('Login');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { message, otherMessage, dispatchLogin, dispatchSayHello } = props;

  useEffect(() => {
    setTimeout(() => dispatchSayHello(), 3000);
  });

  return (
    <div className="login-container">
      <p>{message}</p>
      <p>{otherMessage}</p>
      <div className="login-band">
        <div className="login-form-container">
          <LogoImage />
          <Form className="login-form">
            <h2 className="login-header">Sign In</h2>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                value={username}
                onChange={event => {
                  setUserName(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </FormGroup>
            <Button
              onClick={event => {
                event.preventDefault();
                alert(`${username} is logged in!`);
                dispatchLogin(username, password);
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <SiteCopyRight />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: (username, password) =>
      dispatch({ type: 'LOGIN', username, password }),
    dispatchSayHello: () => dispatch({ type: 'SAY_HELLO' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

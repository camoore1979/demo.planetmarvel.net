import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import log from 'loglevel';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import connect from '../../store/connect';
import LogoImage from '../LogoImage';
import SiteCopyRight from '../SiteCopyright';
import useDocSubTitle from '../../hooks/useDocSubTitle';
import './login.css';

const Login = props => {
  useDocSubTitle('Login');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { dispatchLogin, isLoggedIn, logInError } = props;
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  if (isLoggedIn) history.replace(from);
  return (
    <div className="login-container">
      <div className="login-band">
        <div className="login-form-container">
          <LogoImage />
          <Form
            className="login-form"
            onSubmit={event => {
              event.preventDefault();
              dispatchLogin(username, password);
              history.replace(from);
              log.debug(`logging in ${username} transfering to ${from}`);
            }}
          >
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
            <p>{logInError}</p>
            <Button className="login-button" type="submit">Submit</Button>
          </Form>
        </div>
      </div>
      <SiteCopyRight />
    </div>
  );
};

const mapStateToProps = ({ isLoggedIn, logInError }) => {
  return {
    isLoggedIn,
    logInError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: (username, password) =>
      dispatch({ type: 'LOGIN', username, password })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

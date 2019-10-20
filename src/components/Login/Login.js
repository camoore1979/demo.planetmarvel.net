import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from 'reactstrap';

import connect from '../../store/connect';
import LogoImage from '../LogoImage';
import SiteCopyRight from '../SiteCopyright';
import useDocSubTitle from '../../hooks/useDocSubTitle';
import './login.css';

// import AppContext from '../../AppContext';

const Login = props => {
  useDocSubTitle('Login');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { message, otherMessage } = props;

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
                value={userName}
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
              onCLick={event => {
                event.preventDefault();
                alert(`${userName} is logged in!`);
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

export default connect(mapStateToProps)(Login);

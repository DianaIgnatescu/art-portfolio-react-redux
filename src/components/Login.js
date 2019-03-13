/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const handleClick = loginRequest => (event) => {
  event.preventDefault();
  let username = '';
  let password = '';
  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'username') {
      username = childNode.value;
    } else if (childNode.name === 'password') {
      password = childNode.value;
    }
  });
  if (username && password) {
    loginRequest(username, password);
  }
};

const Login = ({ loggedIn, loginRequest }) => {
  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="login-wrapper">
      <div className="login">
        <form className="login-form">
          <h2>Art Portolio</h2>
          <p>Username</p>
          <input name="username" type="text" placeholder="Your Username..." />
          <p>Password<span>Forgot password?</span></p>
          <input name="password" type="password" placeholder="Your Password..." />

          <div className="alternative-login">
            <p className="center-text">or sign in below</p>
            <div className="alternative-login-buttons">
              <button type="button">Twitter</button>
              <button type="button">Facebook</button>
            </div>

          </div>

          <button type="submit" className="login-button" onClick={handleClick(loginRequest)}>LOGIN</button>

          <div className="login-page-register">
            <p>Need an account?<a href="#">Sign up now!</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Login;

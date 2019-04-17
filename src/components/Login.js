/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 50px 0;
    h2 {
      text-align: center;
      font-family: 'Julius Sans One', sans-serif;
    }
    .login-form {
      padding: 20px;
      background: linear-gradient(to bottom,#3D3A4F, #202330);
      border-radius: 3px;
      border: 1px solid #676D85;
      margin: 60px 0 20px 0;
      @media (max-width: 500px) {
        max-width: 100%;
        border: none;
        background: none;
      }
      p {
      padding: 20px 0 10px;
      }
      button {
        width: 100%;
        margin: 20px 0;
        background: #E19870;
        border: none;
        height: 40px;
        font-size: 1.6rem;
        border-radius: 3px;
        &:hover {
          opacity: 0.8;
          
          cursor: pointer;
        }
      }
      span {
        font-size: 1.6rem;
        padding-left: 15px;
        text-decoration: underline;
        &:hover {
          text-decoration: underline;
          color: #E19870;
          cursor: pointer;
        }
      }
      input {
        width: 100%;
        height: 40px;
        border-radius: 3px;
        border: none;
        color: #BEBEBE;
        padding-left: 15px;
        background:#3e3b4f;
        font-size: 1.8rem;
        &::placeholder {
        font-size: 1.8rem;
        }
      }
      .center-text {
        text-align: center;
        padding-top: 20px;
      }
      .alternative-login-buttons {
        display: flex;
        justify-content: space-between;
        @media (max-width: 500px) {
          flex-direction: column;
        }
        button {
        max-width: 47%;
        background: #676D85;
        color: #BEBEBE;
        &:hover {
        cursor: pointer;
        }
        @media (max-width: 500px) {
          max-width: 100%;
          margin: 10px 0 0 0 ;
        }
      }
    }
    a {
      font-size: 1.8rem;
      text-decoration: underline;
      padding-left: 15px;
      &:hover {
        text-decoration: underline;
        color: #E19870;
        cursor: pointer;
      }
    }
  }
`;

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
    return <Redirect to="/" />;
  }
  return (
    <LoginWrapper>
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
            <p>Need an account?<Link to="/sign-up">Sign up now!</Link></p>
          </div>
        </form>
      </div>
    </LoginWrapper>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Login;

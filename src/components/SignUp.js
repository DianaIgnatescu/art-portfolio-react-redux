import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 0;
`;

const SignUpForm = styled.form`
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
  h2 {
    text-align: center;
    font-family: 'Julius Sans One', sans-serif;
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
  .center-sign-up {
    text-align: center;
    padding-top: 0;
  }
  .sign-up-button {
    width: 100%;
    margin: 20px 0;
    background: #E19870;
  }
  .agreement {
    span {
    padding: 0;
    color: #E19870;
    font-size: 1.6rem;
    }
  }
`;

const AlternativeSignUpButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    width: 100%;
    margin: 5px 0;
    background: #676D85;
    color: #BEBEBE;
    &:hover {
      cursor: pointer;
    }
  }
`;

const handleSignUp = (event, registerUser) => {
  event.preventDefault();
  let username = '';
  let password = '';
  let email = '';

  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'username') {
      username = childNode.value;
    } else if (childNode.name === 'password') {
      password = childNode.value;
    } else if (childNode.name === 'email') {
      email = childNode.value;
    }
  });
  let blank = false;
  if (username && password && email) {
    registerUser(username, password, email);
  } else {
    blank = true;
  }

  if (blank) {
    event.target.parentNode.childNodes.forEach((childNode) => {
      if (childNode.getAttribute('id') === 'result-message') {
        // eslint-disable-next-line no-param-reassign
        childNode.textContent = 'Please fill in all required fields.';
      }
    });
  } else {
    event.target.parentNode.childNodes.forEach((childNode) => {
      if (childNode.getAttribute('id') === 'result-message') {
        // eslint-disable-next-line no-param-reassign
        childNode.textContent = 'Successfully registered. Please log in to continue.';
      }
      if (childNode.name === 'username') {
        // eslint-disable-next-line no-param-reassign
        childNode.value = '';
      } else if (childNode.name === 'password') {
        // eslint-disable-next-line no-param-reassign
        childNode.value = '';
      } else if (childNode.name === 'email') {
        // eslint-disable-next-line no-param-reassign
        childNode.value = '';
      }
    });
  }
};

const SignUp = ({ loggedIn, registerUser }) => {
  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <SignUpContainer>
        <SignUpForm>
          <h2>Art Portolio</h2>
          <p>Username</p>
          <input
            name="username"
            type="text"
            placeholder="Your desired username..."
          />
          <p>Email</p>
          <input
            name="email"
            type="email"
            placeholder="Your Email..."
          />
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Create Password..."
          />
          <p id="result-message" />
          <button
            type="button"
            className="sign-up-button"
            onClick={event => handleSignUp(event, registerUser)}
          >
SIGN UP
          </button>
          <div className="alternative-sign-up">
            <p className="center-sign-up">or</p>
            <AlternativeSignUpButtons>
              <button type="button">Sign up with Twitter</button>
              <button type="button">Sign up with Facebook</button>
              <button type="button">Sign up with Google</button>
            </AlternativeSignUpButtons>
          </div>
          <p className="agreement">
            By continuing, you agree to Art Portolio&apos;s
            {' '}
            <span>Terms of Service</span>
,
            {' '}
            <span>Privacy</span>
, and
            {' '}
            <span>Cookie Use</span>
          </p>
        </SignUpForm>
      </SignUpContainer>
    </div>
  );
};

SignUp.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default SignUp;

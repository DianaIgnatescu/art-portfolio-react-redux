import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

const handleRegister = (event, registerUser) => {
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

const Register = ({ loggedIn, registerUser }) => {
  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <RegisterContainer>
        <RegisterForm>
          <h2>Aportfolio</h2>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Your desired username..."
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email..."
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Create Password..."
          />
          <p id="result-message" />
          <button
            type="button"
            className="register-button"
            onClick={event => handleRegister(event, registerUser)}
          >
            REGISTER
          </button>
          <div className="register-page-login">
            <p>Need an account?<Link to="/sign-up">Sign up now!</Link></p>
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
        </RegisterForm>
      </RegisterContainer>
    </div>
  );
};

Register.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 0;
`;

const RegisterForm = styled.form`
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
    padding-bottom: 1.5rem;
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
    margin: 0.5rem 0 1.5rem 0;
    &::placeholder {
    font-size: 1.8rem;
    }
  }
  .register-button {
    width: 100%;
    margin: 5px 0;
    background: #E19870;
  }
  .register-page-login {
  p {
    padding: 20px 0 10px;
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
  .agreement {
    span {
    padding: 0;
    color: #E19870;
    font-size: 1.6rem;
    }
  }
`;

// const AlternativeRegisterButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   button {
//     width: 100%;
//     margin: 5px 0;
//     background: #676D85;
//     color: #BEBEBE;
//     text-transform: uppercase;
//     &:hover {
//       cursor: pointer;
//     }
//   }
// `;

export default Register;

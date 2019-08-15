import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


const NavBar = ({ loggedIn }) => (
  <NavBarWrapper>
    <NavigationContainer>
      <Link to="/" className="logo">Aportfolio </Link>
      <nav>
        <div className="nav-links">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {!loggedIn ? (
          <div className="register">
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        ) : (
          <div className="register">
            <NavLink to="/logout">Logout</NavLink>
          </div>
        )}
      </nav>
    </NavigationContainer>
  </NavBarWrapper>
);

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const NavBarWrapper = styled.div`
  background: #202330;
  width: 100vw;
  padding: 0 20px;
  position: fixed;
  z-index: 99;
`;

const NavigationContainer = styled.div`
  height: 50px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  .logo {
      font-family: 'Julius Sans One', sans-serif;
      font-size: 2rem;
      @media (max-width: 500px) {
        display: none;
      }
      // margin-left: 50px;
    }
  nav {
    display: flex;
    justify-content: space-between;
    width: 90%;
    .nav-links {
      display: flex;
      justify-content: space-between;
      a {
        padding: 0 20px;
      }
    }
    .active {
      color: #E19870;
    }
    .register {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      a {
        padding-left: 20px;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
      }
    }
    a {
      font-family: 'Roboto';
      font-size: 1.6rem;
      text-transform: uppercase;
    }
  }
`;


export default NavBar;

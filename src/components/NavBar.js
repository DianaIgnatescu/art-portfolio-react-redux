import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ loggedIn }) => (
  <div className="navbar-wrapper">
    <div className="navigation">
      <h1>Art Portolio </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
    </div>
  </div>
);

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Navbar;

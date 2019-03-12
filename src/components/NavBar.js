import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navigation">
        <h1>Art Portolio </h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="register">
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

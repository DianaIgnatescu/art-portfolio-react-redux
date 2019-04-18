/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Logout = ({ loggedIn, logout }) => {
  localStorage.clear();
  logout();
  return <Redirect to="/" />;
};

Logout.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Logout;

import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
    <NavLink to="/login">Login</NavLink>

    <Route path="/" />
    <Route path="/dashboard" />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" />
    <Route path="/login" />
    <Route path="/sign-up" />

    <Footer />

  </div>
);

export default App;

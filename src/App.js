import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

const App = ({ state }) => (
  <div className="App">
    <NavBar />
    <Route exact path="/" render={props => <HomePage {...props} posts={state.posts} />} />
    {/* <Route exact path="/" component={HomePage} /> */}
    <Route path="/dashboard" render={props => <Dashboard {...props} posts={state.posts} />} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/login" render={props => <Login {...props} posts={state.authToken} />} />
    <Route path="/sign-up" component={SignUp} />
    <Footer />
  </div>
);
const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps)(App));

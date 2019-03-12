import React from 'react';
import { Route, withRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loginRequest, fetchAllPosts, createPost, deletePost, updatePost, logout
} from './store/actions';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

const App = ({
  state, dispatchFetchAllPosts, dispatchLoginRequest,
  dispatchCreatePost, dispatchDeletePost, dispatchUpdatePost, dispatchLogout
}) => (
  <div className="App">
    <NavBar loggedIn={Boolean(state.authToken)} />
    <Route
      exact
      path="/"
      render={props => (
        <HomePage
          {...props}
          posts={state.posts}
          fetchAllPosts={dispatchFetchAllPosts}
        />
      )}
    />
    <Route path="/dashboard" render={props => <Dashboard {...props} posts={state.posts} />} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/login" render={props => <Login {...props} loggedIn={Boolean(state.authToken)} posts={state.authToken} loginRequest={dispatchLoginRequest} />} />
    <Route path="/sign-up" render={props => <SignUp {...props} loggedIn={Boolean(state.authToken)} />} />
    <Route path="/logout" render={props => <Logout {...props} loggedIn={Boolean(state.authToken)} logout={dispatchLogout} />} />

    <Footer />
  </div>
);

App.propTypes = {
  state: PropTypes.shape().isRequired,
  dispatchFetchAllPosts: PropTypes.func.isRequired,
  dispatchCreatePost: PropTypes.func.isRequired,
  dispatchDeletePost: PropTypes.func.isRequired,
  dispatchUpdatePost: PropTypes.func.isRequired,
  dispatchLoginRequest: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps, {
  dispatchLoginRequest: loginRequest,
  dispatchFetchAllPosts: fetchAllPosts,
  dispatchCreatePost: createPost,
  dispatchDeletePost: deletePost,
  dispatchUpdatePost: updatePost,
  dispatchLogout: logout,
})(App));

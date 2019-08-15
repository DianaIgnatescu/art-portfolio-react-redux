import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loginRequest, fetchAllPosts, createPost, deletePost, updatePost, logout, showPostModal,
  hidePostModal, makePostModalEditable, makePostModalUneditable, registerUser, likePost, unlikePost,
} from './store/actions';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TimelinePage from './components/TimelinePage';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    const { dispatchFetchAllPosts } = this.props;
    dispatchFetchAllPosts();
  }

  render() {
    const {
      state, dispatchFetchAllPosts, dispatchLoginRequest,
      dispatchDeletePost, dispatchLogout, dispatchShowPostModal, dispatchUpdatePost,
      dispatchHidePostModal, dispatchCreatePost, dispatchMakePostModalEditable,
      dispatchMakePostModalUneditable, dispatchRegisterUser, dispatchLikePost, dispatchUnlikePost,
    } = this.props;
    return (
      <div className="App">
        <NavBar loggedIn={Boolean(state.authToken)} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                posts={state.posts}
                fetchAllPosts={dispatchFetchAllPosts}
                showPostModal={dispatchShowPostModal}
                createPost={dispatchCreatePost}
                updatePost={dispatchUpdatePost}
                deletePost={dispatchDeletePost}
                hidePostModal={dispatchHidePostModal}
                shownPostModal={state.shownPostModal.id}
                isEditable={state.shownPostModal.isEditable}
                loggedIn={Boolean(state.authToken)}
                makePostModalEditable={dispatchMakePostModalEditable}
                makePostModalUneditable={dispatchMakePostModalUneditable}
                username={state.currentUser.username}
                email={state.currentUser.email}
                userId={state.currentUser.userId}
              />
            )}
          />

          <Route
            path="/timeline"
            render={props => (
              <TimelinePage
                {...props}
                posts={state.posts}
                fetchAllPosts={dispatchFetchAllPosts}
                showPostModal={dispatchShowPostModal}
                createPost={dispatchCreatePost}
                updatePost={dispatchUpdatePost}
                deletePost={dispatchDeletePost}
                hidePostModal={dispatchHidePostModal}
                shownPostModal={state.shownPostModal.id}
                isEditable={false}
                loggedIn={Boolean(state.authToken)}
                makePostModalEditable={dispatchMakePostModalEditable}
                makePostModalUneditable={dispatchMakePostModalUneditable}
                username={state.currentUser.username}
                email={state.currentUser.email}
                userId={state.currentUser.userId}
                likePost={dispatchLikePost}
                unlikePost={dispatchUnlikePost}
              />
            )}
          />
          <Route exact path="/about" render={props => <AboutPage {...props} />} />
          <Route exact path="/contact" render={props => <ContactPage {...props} />} />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                loggedIn={Boolean(state.authToken)}
                posts={state.authToken}
                loginRequest={dispatchLoginRequest}
              />
            )}
          />
          <Route
            path="/sign-up"
            render={props => (
              <SignUp
                {...props}
                loggedIn={Boolean(state.authToken)}
                registerUser={dispatchRegisterUser}
              />
            )}
          />
          <Route
            path="/logout"
            render={props => (
              <Logout
                {...props}
                loggedIn={Boolean(state.authToken)}
                logout={dispatchLogout}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape().isRequired,
  dispatchFetchAllPosts: PropTypes.func.isRequired,
  dispatchCreatePost: PropTypes.func.isRequired,
  dispatchDeletePost: PropTypes.func.isRequired,
  dispatchUpdatePost: PropTypes.func.isRequired,
  dispatchLoginRequest: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired,
  dispatchShowPostModal: PropTypes.func.isRequired,
  dispatchHidePostModal: PropTypes.func.isRequired,
  dispatchMakePostModalEditable: PropTypes.func.isRequired,
  dispatchMakePostModalUneditable: PropTypes.func.isRequired,
  dispatchRegisterUser: PropTypes.func.isRequired,
  dispatchLikePost: PropTypes.func.isRequired,
  dispatchUnlikePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ state });
export default withRouter(connect(mapStateToProps, {
  dispatchLoginRequest: loginRequest,
  dispatchFetchAllPosts: fetchAllPosts,
  dispatchCreatePost: createPost,
  dispatchDeletePost: deletePost,
  dispatchUpdatePost: updatePost,
  dispatchLogout: logout,
  dispatchShowPostModal: showPostModal,
  dispatchHidePostModal: hidePostModal,
  dispatchMakePostModalEditable: makePostModalEditable,
  dispatchMakePostModalUneditable: makePostModalUneditable,
  dispatchRegisterUser: registerUser,
  dispatchLikePost: likePost,
  dispatchUnlikePost: unlikePost,
})(App));

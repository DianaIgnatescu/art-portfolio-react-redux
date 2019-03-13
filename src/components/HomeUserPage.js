import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import HomeImage from '../assets/illustrations/undraw_home.svg';
// import { fetchAllPosts } from '../store/actions';

const HomeUserPage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, updatePost, hidePostModal, shownPostModal,
    loggedIn, isEditable, makePostModalEditable, makePostModalUneditable,
  } = props;
  return (
    <div className="home-page-wrapper">
      <section className="home-page-header">
        <div className="header-left">
          <h2>Discover the world's top creatives</h2>
          <p>
            Art Portolio is amet everyday carry humblebreg street art keffiyeh 90's tacos poutine bitters drinking vinegar slow-carb subway tile echo park vaporware ethical. Quinoa viral gluten-free kinfolk ramps chillwave.
          </p>
          <button type="button" className="orange">SIGN UP</button>
        </div>
        <div className="header-right">
          <img src={HomeImage} alt="undraw-illustration" />
        </div>
      </section>

      <PostsList
        posts={posts}
        fetchAllPosts={fetchAllPosts}
        showPostModal={showPostModal}
        hidePostModal={hidePostModal}
        deletePost={deletePost}
        updatePost={updatePost}
        shownPostModal={shownPostModal}
        isEditable={isEditable}
        makePostModalEditable={makePostModalEditable}
        makePostModalUneditable={makePostModalUneditable}
        loggedIn={loggedIn}
      />

      <section className="home-page-bottom-content">
        <h2>Download the App</h2>
        <h3>Our app is available for download so give it a try</h3>
        <div className="download-buttons">
          <button type="button">
            <i className="fab fa-apple" />
For iOS
          </button>
          <button type="button">
            <i className="fab fa-google-play" />
For Android
          </button>
        </div>
      </section>

    </div>
  );
};

HomeUserPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomeUserPage;

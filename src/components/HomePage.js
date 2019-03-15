import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import HomeArtistPage from './HomeArtistPage';
import HomeUserPage from './HomeUserPage';
// import { fetchAllPosts } from '../store/actions';

const HomePage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, createPost, updatePost, isEditable,
    makePostModalEditable, makePostModalUneditable, hidePostModal, shownPostModal, loggedIn,
  } = props;

  if (loggedIn) {
    return (
      <HomeArtistPage
        posts={posts}
        deletePost={deletePost}
        createPost={createPost}
        showPostModal={showPostModal}
        hidePostModal={hidePostModal}
        updatePost={updatePost}
        fetchAllPosts={fetchAllPosts}
        shownPostModal={shownPostModal}
        isEditable={isEditable}
        makePostModalEditable={makePostModalEditable}
        makePostModalUneditable={makePostModalUneditable}
        loggedIn={loggedIn}
      />
    );
  }

  return (
    <HomeUserPage
      posts={posts}
      fetchAllPosts={fetchAllPosts}
      showPostModal={showPostModal}
      shownPostModal={shownPostModal}
      hidePostModal={hidePostModal}
      deletePost={deletePost}
      createPost={createPost}
      updatePost={updatePost}
      isEditable={isEditable}
      makePostModalEditable={makePostModalEditable}
      makePostModalUneditable={makePostModalUneditable}
      loggedIn={loggedIn}
    />
  );
};

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  createPost: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default HomePage;

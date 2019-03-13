import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostsList from './PostsList';
import HomeArtistProfilePanel from './HomeArtistProfilePanel';
import HomeArtistCreatePost from './HomeArtistCreatePost';

const HomeArtistPage = (props) => {
  const {
    posts, fetchAllPosts, showPostModal, deletePost, updatePost, shownPostModal, hidePostModal,
    createPost, isEditable, makePostModalEditable, makePostModalUneditable, loggedIn,
  } = props;

  return (
    <div className="dashboard-wrapper">
      <HomeArtistProfilePanel />
      <div className="user-actions">
        <HomeArtistCreatePost createPost={createPost} />
        <div className="artist-post-list">
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
        </div>
      </div>
    </div>
  );
};

HomeArtistPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
};

export default HomeArtistPage;

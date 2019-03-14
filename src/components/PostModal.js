import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PostModalEditable from './PostModalEditable';
import PostModalUneditable from './PostModalUneditable';

const PostModal = (props) => {
  const {
    shownPostModal, posts, hidePostModal, deletePost, isEditable, makePostModalEditable,
    makePostModalUneditable, updatePost, loggedIn,
  } = props;

  if (loggedIn && shownPostModal) {
    return (
      <PostModalEditable
        isEditable={isEditable}
        posts={posts}
        shownPostModal={shownPostModal}
        hidePostModal={hidePostModal}
        deletePost={deletePost}
        updatePost={updatePost}
        makePostModalEditable={makePostModalEditable}
        makePostModalUneditable={makePostModalUneditable}
        loggedIn={loggedIn}
      />
    );
  }
  if (shownPostModal) {
    return (
      <PostModalUneditable
        posts={posts}
        shownPostModal={shownPostModal}
        hidePostModal={hidePostModal}
      />
    );
  }
  return null;
};

PostModal.propTypes = {
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  // imageUrl: PropTypes.string.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default PostModal;

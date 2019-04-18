import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import PostsList from './PostsList';

const TimelinePage = ({
  loggedIn, posts, fetchAllPosts, showPostModal, hidePostModal, deletePost, updatePost,
  shownPostModal, isEditable, makePostModalEditable, makePostModalUneditable, likePost, unlikePost,
  userId,
}) => {
  if (loggedIn) {
    return (
      <PostsList
        posts={posts}
        fetchAllPosts={fetchAllPosts}
        showPostModal={showPostModal}
        hidePostModal={hidePostModal}
        deletePost={deletePost}
        updatePost={updatePost}
        likePost={likePost}
        unlikePost={unlikePost}
        shownPostModal={shownPostModal}
        isEditable={false}
        makePostModalEditable={makePostModalEditable}
        makePostModalUneditable={makePostModalUneditable}
        loggedIn={false}
        userId={userId}
      />
    );
  }
  return <Redirect to="/home" />;
};

// TimelinePage.propTypes = {
//   loggedIn, posts, fetchAllPosts, showPostModal, hidePostModal, deletePost, updatePost,
//   shownPostModal, isEditable, makePostModalEditable, makePostModalUneditable, likePost, unlikePost,
// };

export default TimelinePage;

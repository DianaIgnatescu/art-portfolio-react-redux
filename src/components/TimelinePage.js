import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import PostsList from './PostsList';

const TimelinePage = ({
  loggedIn, posts, fetchAllPosts, showPostModal, hidePostModal, deletePost, updatePost,
  shownPostModal, isEditable, makePostModalEditable, makePostModalUneditable,
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
        shownPostModal={shownPostModal}
        isEditable={false}
        makePostModalEditable={makePostModalEditable}
        makePostModalUneditable={makePostModalUneditable}
        loggedIn={false}
      />
    );
  }
  return <Redirect to="/home" />;
};

export default TimelinePage;

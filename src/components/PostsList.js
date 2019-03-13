import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Post from './Post';
import PostModal from './PostModal';

const PostsList = (props) => {
  const {
    posts, deletePost, updatePost, showPostModal, shownPostModal, hidePostModal, isEditable,
    makePostModalEditable, makePostModalUneditable,
  } = props;
  return (
    <div className="post-list-wrapper">
      <h3>This is a where the gallery goes</h3>
      <div className="post-list">
        <PostModal
          isEditable={isEditable}
          posts={posts}
          shownPostModal={shownPostModal}
          hidePostModal={hidePostModal}
          deletePost={deletePost}
          updatePost={updatePost}
          makePostModalEditable={makePostModalEditable}
          makePostModalUneditable={makePostModalUneditable}
        />
        {posts.map(post => (
          <Post
            id={post.id}
            key={post.id}
            imageUrl={post.imageUrl}
            upvotes={post.upvotes}
            userId={post.userId}
            description={post.description}
            postName={post.postName}
            deletePost={deletePost}
            updatePost={updatePost}
            showPostModal={showPostModal}
            shownPostModal={shownPostModal}
          />
        ))}
      </div>
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showPostModal: PropTypes.func.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
};

export default PostsList;

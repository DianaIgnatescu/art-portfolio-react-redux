import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Post from './Post';

const PostsList = (props) => {
  const { posts } = props;
  return (
    <div className="post-list-wrapper">
      <h3>This is a where the gallery goes</h3>
      <div className="post-list">
        {posts.map(post => (
          <Post
            id={post.id}
            key={post.id}
            imageUrl={post.imageUrl}
            upvotes={post.upvotes}
            userId={post.userId}
            description={post.description}
            postName={post.postName}
            deletePost={post.deletePost}
            updatePost={post.updatePost}
          />
        ))}
      </div>
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostsList;

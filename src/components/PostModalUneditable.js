import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const handleClick = hidePostModal => (event) => {
  event.preventDefault();
  hidePostModal();
};

const PostModalUneditable = (props) => {
  const {
    shownPostModal, posts, hidePostModal,
  } = props;

  const post = posts.find(aPost => aPost.id === shownPostModal);
  return (
    <div className="post-modal-container" onClick={handleClick(hidePostModal)}>
        I am a post modal.
      <button type="button" onClick={handleClick(hidePostModal)}>X</button>
      <img src={post.imageUrl} alt="cannot display post" />
      <p>
        {post.upvotes}
        {' '}
Likes
      </p>
      <p>{post.postName}</p>
      <p>{post.description}</p>
    </div>
  );
};

PostModalUneditable.propTypes = {
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hidePostModal: PropTypes.func.isRequired,
};

export default PostModalUneditable;

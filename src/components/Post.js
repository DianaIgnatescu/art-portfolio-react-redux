import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// import ImagePost from '../assets/artist.png';

const handleShowModalClick = (id, showPostModal) => (event) => {
  event.preventDefault();
  showPostModal(id);
};

const Post = (props) => {
  const {
    id, imageUrl, upvotes, description, showPostModal,
  } = props;

  return (
    <div className="post">
      <button type="button" onClick={handleShowModalClick(id, showPostModal)}>View</button>
      <img src={imageUrl} alt={description} />
      <p>
        {upvotes}
        {' '}
Likes
      </p>
    </div>

  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  showPostModal: PropTypes.func.isRequired,
};

export default Post;

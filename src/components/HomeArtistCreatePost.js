import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const handleClick = createPost => (event) => {
  event.preventDefault();
  let title = '';
  let description = '';
  let imageUrl = '';
  event.target.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'title') {
      title = childNode.value;
    } else if (childNode.name === 'description') {
      description = childNode.value;
    } else if (childNode.name === 'imageUrl') {
      imageUrl = childNode.value;
    }
  });
  if (title && description && imageUrl) {
    createPost(title, imageUrl, description);
    event.target.parentNode.childNodes.forEach((childNode) => {
      // eslint-disable-next-line no-param-reassign
      childNode.value = '';
    });
  }
};

const HomeArtistCreatePost = (props) => {
  const { createPost } = props;
  return (
    <div className="create-post">
      <h4>Share your work</h4>
      <form>
        <input name="title" type="text" placeholder="Title your post..." />
        <input name="imageUrl" type="text" placeholder="Insert image..." />
        <input name="description" type="text" placeholder="Add a description..." />
        <button type="button" onClick={handleClick(createPost)}>Create Post</button>
      </form>
    </div>
  );
};

HomeArtistCreatePost.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default HomeArtistCreatePost;

import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const CreatePost = styled.div`
  border: 1px solid #676D85;
  border-radius: 3px;
  width: 100%;
  padding: 20px;
  h3 {
    padding: 15px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      margin: 5px 0;
      border: none;
      height: 40px;
      padding-left: 15px;
      border-radius: 3px;
      font-size: 1.6rem;
      background: #3e3b4f;
      color: #BEBEBE;
    }
    button {
      margin-top: 10px;
      height: 40px;
      text-transform: uppercase;
      padding: 5px;
      font-size: 1.6rem;
      margin: 10px 0;
      width: 150px;
      background: #E19870;
      border-radius: 3px;
      border: none;
      color: #3D3A4F;
      cursor: pointer;
      &:hover {
      opacity: 0.8;
      color: #3D3A4F;
    }
  }
`;

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
    <CreatePost>
      <h3>Share your work</h3>
      <form>
        <input name="title" type="text" placeholder="Title your post..." />
        <input name="imageUrl" type="text" placeholder="Insert image..." />
        <input name="description" type="text" placeholder="Add a description..." />
        <button type="button" onClick={handleClick(createPost)}>Create Post</button>
      </form>
    </CreatePost>
  );
};

HomeArtistCreatePost.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default HomeArtistCreatePost;

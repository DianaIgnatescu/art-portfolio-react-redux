import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const PostContainer = styled.div`
  width: 30%;
  text-align: right;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
  .image-container {
    height: 300px;
    @media (max-width: 500px) {
    max-width: 100%;
    }
    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      height: 100%;
    }
  }
    
  button {
    width: 60px;
    height: 30px;
    font-size: 1.6rem;
    text-align: center;
    position: relative;
    border-radius: 0;
    border: none;
    top: 30px;
    padding: 0;
    cursor: pointer;
    background: #202330;
    opacity: 0.5;
    color: #FFFFFF;
    &:hover {
    opacity: 0.6;
    color: #FFFFFF;
    }
  }
 .post-reactions {
    display: flex;
    padding: 5px;
    background: #202330;
    opacity: 0.5;
    justify-content: space-between;
    position: relative;
    bottom: 29px;
    &:hover {
      opacity: 0.5;
      color: #FFFFFF;
    }
    i {
      padding-right: 7px;
    }
  } 
`;

const handleShowModalClick = (id, showPostModal) => (event) => {
  event.preventDefault();
  showPostModal(id);
};

const Post = (props) => {
  const {
    id, imageUrl, upvotes, description, showPostModal,
  } = props;

  return (
    <PostContainer onClick={handleShowModalClick(id, showPostModal)}>
      <button type="button" onClick={handleShowModalClick(id, showPostModal)}>View</button>
      <div className="image-container">
        <img src={imageUrl} alt={description} />
      </div>

      <div className="post-reactions">
        <p>
          <i className="far fa-heart" />
          {upvotes}
          {' '}
Likes
        </p>
        <p>
          <i className="fas fa-eye" />
Views
        </p>
      </div>

    </PostContainer>

  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  showPostModal: PropTypes.func.isRequired,
};

export default Post;

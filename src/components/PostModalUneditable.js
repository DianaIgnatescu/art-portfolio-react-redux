import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const PostModalOuter = styled.div`
  height: 100vh;
  width: 100%;
  // background: black;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(51,51,51,0.4);
`;

const PostModalUneditableContainer = styled.div`
  position: fixed;
  background: #F1F1F1;
  width: 50%;
  height: auto;
  top: 20%;
  left:50%;
  margin-top: 15%;
  transform: translate(-50%,-50%);
  overflow-y: auto;
  z-index: 101;
  // opacity: 1;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0 20px 20px;
  
  @media(max-width: 500px) {
    width: 100%;
    top: 30%;
  }
  button {
    background: none;
    width: 30px;
    position: relative;
    left: 98%;
    border: none;
    font-size: 1.6rem;
    height: 30px;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .post-reactions {
    color: #3D3A4F;
    font-size: 1.6rem;
    padding: 5px 0;
    display: flex;
    justify-content: flex-start;
    i {
    padding-right: 5px;
    font-size: 1.8rem;
    }
    p {
      color: #3D3A4F;
      font-size: 1.6rem;
    }
  }
  .post-title {
    color: #3D3A4F;
    font-size: 1.6rem;
    font-weight: bold;
    padding-top: 5px;
  }
  .post-description {
    color: #3D3A4F;
    font-size: 1.6rem;
    // padding-top: 5px;
  }
`;

const handleLike = (userId, postId, likePost) => {
  return () => likePost(postId, userId);
};

const handleUnlike = (userId, postId, unlikePost) => {
  return () => unlikePost(postId, userId);
};

const handleClick = hidePostModal => (event) => {
  event.preventDefault();
  hidePostModal();
};

const PostModalUneditable = (props) => {
  const {
    shownPostModal, posts, hidePostModal, isLiked, likePost, unlikePost, userId,
  } = props;

  const post = posts.find(aPost => aPost.id === shownPostModal);
  return (
    <PostModalOuter>
      <PostModalUneditableContainer>
        <button type="button" onClick={handleClick(hidePostModal)}>X</button>
        <img src={post.imageUrl} alt="cannot display post" />
        <div className="post-reactions">
          {isLiked ? <i onClick={handleUnlike(userId, shownPostModal, unlikePost)} className="fas fa-heart" />
            : <i onClick={handleLike(userId, shownPostModal, likePost)} className="far fa-heart" />}
          <p>
            {post.upvotes.length}
            {' '}
Likes
            {' '}
          </p>
        </div>
        <p className="post-title">{post.postName}</p>
        <p className="post-description">{post.description}</p>
      </PostModalUneditableContainer>
    </PostModalOuter>
  );
};

PostModalUneditable.propTypes = {
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hidePostModal: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
};

export default PostModalUneditable;

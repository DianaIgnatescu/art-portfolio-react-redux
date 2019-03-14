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

const PostModalEditableContainer = styled.div`
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
    top: 30%;
    width: 100%;
  }
  .image-container {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
    
  }
  .close {
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
  .post-title {
    color: #3D3A4F;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 5px 0;
  }
  .post-description {
    color: #3D3A4F;
    font-size: 1.6rem;
    // padding-top: 5px;
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
 
  p {
    color: #3D3A4F;
  }
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
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
  .action-button {
    background: #3D3A4F;
    margin-left: 5px;
    height: 25px;
    width: 100px;
    font-size: 1.4rem;
    color: #f1f1f1;
    border: none;
    border-radius: 3px;
  }
`;

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin: 5px 0;
    border: none;
    height: 40px;
    padding-left: 15px;
    border-radius: 3px;
    font-size: 1.6rem;
    color: #3D3A4F;
  }
  p {
    padding-top: 5px;
    color: #3D3A4F;
  }
  .post-action-buttons {
    display: flex;
    justify-content: flex-end;
    .action-button {
      background: #3D3A4F;
      margin-left: 5px;
      height: 25px;
      width: 100px;
      font-size: 1.4rem;
      color: #f1f1f1;
      border: none;
      border-radius: 3px;
    }
  }
`;

const handleClick = hidePostModal => () => hidePostModal();

const handleEditClick = makePostModalEditable => (event) => {
  event.preventDefault();
  makePostModalEditable();
};

const handleDeleteClick = (id, deletePost) => (event) => {
  event.preventDefault();
  deletePost(id);
};

const handleSave = (id, updatePost) => (event) => {
  event.preventDefault();
  let postName = '';
  let imageUrl = '';
  let description = '';
  event.target.parentNode.parentNode.childNodes.forEach((childNode) => {
    if (childNode.name === 'postName') {
      postName = childNode.value;
    } else if (childNode.name === 'imageUrl') {
      imageUrl = childNode.value;
    } else if (childNode.name === 'description') {
      description = childNode.value;
    }
  });
  if (postName || description || imageUrl) {
    updatePost(id, postName, imageUrl, description);
  }
};

const PostModalEditable = (props) => {
  const {
    shownPostModal, posts, hidePostModal, deletePost, isEditable, makePostModalEditable, updatePost,
  } = props;
  if (!isEditable) {
    const post = posts.find(aPost => aPost.id === shownPostModal);
    return (
      <PostModalOuter>
        <PostModalEditableContainer>
          <button type="button" className="close" onClick={handleClick(hidePostModal)}>X</button>
          <div className="image-container">
            <img src={post.imageUrl} alt="cannot display post" />
          </div>
          <PostActions>
            <div className="post-reactions">
              <i className="far fa-heart" />
              <p>
                {post.upvotes}
                {' '}
Likes
                {' '}
              </p>
            </div>
            <div className="post-action-buttons">
              <button type="button" className="action-button" onClick={handleDeleteClick(shownPostModal, deletePost)}>DELETE</button>
              <button type="button" className="action-button" onClick={handleEditClick(makePostModalEditable)}>EDIT</button>
            </div>
          </PostActions>
          <p className="post-title">{post.postName}</p>
          <p className="post-description">{post.description}</p>
        </PostModalEditableContainer>
      </PostModalOuter>
    );
  }
  if (isEditable) {
    const post = posts.find(aPost => aPost.id === shownPostModal);
    return (
      <PostModalOuter>
        <PostModalEditableContainer>
          <button type="button" className="close" onClick={handleClick(hidePostModal)}>X</button>
          <PostForm>
            <p>Insert a new URL</p>
            <input name="imageUrl" placeholder={post.imageUrl} />
            <p>Insert a new title</p>
            <input name="postName" placeholder={post.postName} />
            <p>Insert a new description</p>
            <input name="description" placeholder={post.description} />
            <div className="post-action-buttons">
              <button type="button" className="action-button" onClick={handleDeleteClick(shownPostModal, deletePost)}>DELETE</button>
              <button type="button" className="action-button" onClick={handleSave(shownPostModal, updatePost)}>SAVE</button>
            </div>
          </PostForm>
          <div className="post-reactions">
            <i className="far fa-heart" />
            <p>
              {post.upvotes}
              {' '}
Likes
              {' '}
            </p>
          </div>

          <p className="post-title">{post.postName}</p>
          <p className="post-description">{post.description}</p>
        </PostModalEditableContainer>
      </PostModalOuter>
    );
  }
};

PostModalEditable.propTypes = {
  shownPostModal: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  // imageUrl: PropTypes.string.isRequired,
  hidePostModal: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  makePostModalEditable: PropTypes.func.isRequired,
  makePostModalUneditable: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default PostModalEditable;

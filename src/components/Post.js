import React from 'react';
import ImagePost from '../assets/artist.png';

const Post = (props) => {
  const { id, imageUrl, upvotes, userId, description, postName, deletePost, updatePost } = props;

  return (
    <div className="post-container">

      <div className="post-overlay">
        <div className="overlay-inner">
          <button className="close" type="button">✕</button>
          <img
            key={id}
            id={id}
            src={imageUrl}
            upvotes={upvotes}
            description={description}
            alt="cannot display post"
          />
          <div className="details">
            <div className="upvote"><i className="fas fa-heart"></i>{upvotes} Likes</div>
            <span>By Current User</span>
          </div>
          <p>Selvage raclette hoodie succulents kogi fingerstache readymade viral you probably haven't heard of them. </p>         
        </div>
      </div>

      <div className="post">
        <img
          key={id}
          id={id}
          src={imageUrl}
          upvotes={upvotes}
          description={description}
          alt="cannot display post"
        />
        <p>{upvotes} Likes</p>
        <div className="post-action-buttons">
          <button type="button" className="delete">DELETE</button>
          <button type="button" className="edit">EDIT</button>
        </div>
      </div>
      
      
    </div>

  );
};

export default Post;

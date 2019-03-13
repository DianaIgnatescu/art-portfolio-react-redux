import React from 'react';
import UserProfile from '../assets/artist.png';

const HomeArtistProfilePanel = () => (
  <div className="user-info">
    <img src={UserProfile} alt="user" />
    <h3>User name</h3>
    <p>Some description blah blah blah blah blah blah blah blah</p>
    <button type="button">146 Followers</button>
    <p>Elsewhere:</p>
    <p>
      <i className="fab fa-instagram" />
Instagram
    </p>
    <p>
      <i className="fas fa-globe-europe" />
Website
    </p>
    <p>
      <i className="fab fa-twitter" />
Twitter
    </p>
  </div>
);

export default HomeArtistProfilePanel;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserProfile from '../assets/artist.jpg';

const UserInfo = styled.div`
  max-width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #676D85;
  @media (max-width: 500px) {
    max-width: 100%;
    margin: 15px;
    border: none;
  }
  img {
    border-radius: 50%;
    max-width: 50%;
    margin: 0 auto;
  }
  h4 {
    color: #E19870;
    text-align: center;
    padding: 15px;
  }
  p {
    color: #BEBEBE;
    padding: 5px 10px;
  }
  p.quote {
    font-style: italic;
    padding: 0 10px;
  }
  a {
    padding: 5px 10px;
  }
  i {
    padding-right: 10px;
  }
  button {

    background: #676D85;
    color: #BEBEBE;
    padding: 5px;
    font-size: 1.6rem;
    width: 150px;
    align-self: center;
    margin: 10px 0;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    margin: 20px 0;
  }
  
`;

const HomeArtistProfilePanel = ({ username, email }) => (
  <UserInfo>
    <img src={UserProfile} alt="user" />
    <h4>{username}</h4>
    <h5>{email}</h5>
    <p className="quote">Some description, very inspiring, sounds smart, love it.</p>
    <button type="button">146 Followers</button>
    <p>Elsewhere:</p>
    <a href="https://www.instagram.com/">
      <i className="fab fa-instagram" />
      Instagram
    </a>
    <a href="https://www.google.com/">
      <i className="fas fa-globe-europe" />
      Website
    </a>
    <a href="https://twitter.com/">
      <i className="fab fa-twitter" />
      Twitter
    </a>
  </UserInfo>
);

HomeArtistProfilePanel.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default HomeArtistProfilePanel;

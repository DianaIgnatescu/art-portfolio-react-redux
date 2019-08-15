/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FooterInfo>
        <h4>Aportfolio</h4>
        <p>
          We are aenean vulputate nisl arcu, non consequat risus vulputate sed. Nulla eu sapien
          condimentum nisi aliquet sodales non et diam. Duis blandit nunc semper rutrum congue.
          Phasellus sed lacus ut odio vehicula varius.
        </p>
        <div className="footer-icons fa-lg">
          <a href="#"><i className="fab fa-facebook fa-lg" /></a>
          <a href="#"><i className="fab fa-twitter fa-lg" /></a>
          <a href="#"><i className="fab fa-instagram fa-lg" /></a>
        </div>
      </FooterInfo>
      <FooterLinks>
        <h4>Find Out More</h4>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </FooterLinks>
      <FooterContact>
        <h4>Say hello to us</h4>
        <p>
          <i className="fas fa-map-marker-alt" />
          London, United Kingdom
        </p>
        <p>
          <i className="far fa-envelope" />
          <span>hello@aportfolio.com</span>
        </p>
        <p>
          <i className="fas fa-phone" />
          032 267 899 442
        </p>
      </FooterContact>
    </FooterContent>
    <Copyright>©Copyright. All Rights Reserved.</Copyright>
  </FooterWrapper>
);

const FooterWrapper = styled.section`
  background: #202330;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media(max-width: 500px) {
    flex-direction: column;
    margin: 20px;
  }
  h4 {
    color: #676D85;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: #676D85;
    font-size: 1.6rem;
    line-height: 2rem;
    margin: 0;
  }
`;

const FooterInfo = styled.div`
  max-width: 40%;
  @media (max-width: 500px) {
    max-width: 100%;
    padding-top: 30px;
  }
  i {
    color: #676D85;
    padding: 15px 5px 0;
    &:hover {
      color: #E19870;
      transition: all 0.5s ease;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  @media (max-width: 500px) {
    max-width: 100%;
    padding-top: 30px;
  }
  a {
    padding-bottom: 5px;
    text-decoration: none;
    color: #676D85;
    &:hover {
      transition: all 0.5s ease;
      color: #E19870;
    }
  }
`;

const FooterContact = styled.div`
  max-width: 30%;
  @media (max-width: 500px) {
    max-width: 100%;
    padding-top: 30px;
  }
  p {
    padding-bottom: 5px;
  }
  i {
    padding-right: 7px;
  }
  span:hover {
    color: #E19870;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;

const Copyright = styled.p`
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  max-width: 800px;
  border-top: 1px solid #676D85;
  color: #676D85;
  font-size: 1.6rem;
`;

export default Footer;

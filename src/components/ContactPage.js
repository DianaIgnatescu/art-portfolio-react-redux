import React from 'react';
import styled from 'styled-components';

const ContactPage = () => (
  <ContactPageWrapper>
    <ContactForm>
      <h1>Contact Aportfolio</h1>
      <p>
        Use the form below to get in touch and we'll try our best to get to you as soon as possible.
      </p>
      <label>Full Name</label>
      <input type="text" placeholder="Your Full Name..." />
      <label>Email Address</label>
      <input type="email" placeholder="Your Email Address..." />
      <label>Subject</label>
      <input type="text" placeholder="What is your question about?..." />
      <label>Message</label>
      <input type="message" placeholder="Be as detailed as you can..." />
      <button type="button">Send Message</button>
    </ContactForm>
  </ContactPageWrapper>
);

const ContactPageWrapper = styled.div`
  padding: 80px 0;
`;

const ContactForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    margin: 15px 0;
  }
  label {
    padding: 1.5rem 0;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 3px;
    border: none;
    padding-left: 15px;
    font-size: 1.6rem;
    background:#3e3b4f;
    color: #BEBEBE;
    margin: 5px 0 10px 0;
  }
  button {
    width: 200px;
    margin: 20px 0;
    height: 40px;
    border-radius: 3px;
    color: #3D3A4F;
    border: none;
    text-transform: uppercase;
    font-size: 1.6rem;
    background: #E19870;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  p {
    padding: 15px 0 10px;
  }
`;

export default ContactPage;

import React from 'react';
import styled from 'styled-components';

const ContactPageWrapper = styled.div`
  padding: 80px 0;
`;

const ContactForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    padding: 15px 0;
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
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  p {
    padding: 15px 0 10px;
  }
`;

const ContactPage = () => (
  <ContactPageWrapper>

    <ContactForm>
      <h1>Contact Art Portolio</h1>
      <p>
        Use the form below to get in touch. Chillwave scenester shoreditch, intelligentsia
        sriracha swag blog. Man braid pickled fixie adaptogen meditation franzen.
      </p>
      <p>Full Name</p>
      <input type="text" placeholder="Your Full Name..." />
      <p>Email Address</p>
      <input type="email" placeholder="Your Email Address..." />
      <p>Subject</p>
      <input type="text" placeholder="What is your question about?..." />
      <p>Message</p>
      <input type="message" placeholder="Be as detailed as you can..." />
      <button type="button">Send Message</button>

    </ContactForm>
  </ContactPageWrapper>
);

export default ContactPage;

import React from 'react';

const ContactPage = () => (
  <div className="contact-page-wrapper">

    <form className="contact-form">
      <h1>Contact Art Portolio</h1>
      <p>
          Use the form below to get in touch. Chillwave scenester shoreditch, intelligentsia sriracha swag blog. Man braid pickled fixie adaptogen meditation franzen.
      </p>
      <p>Full Name</p>
      <input type="text" placeholder="Your Full Name..." />
      <p>Email Address</p>
      <input type="email" placeholder="Your Email Address..." />
      <p>Subject</p>
      <input type="text" placeholder="What is this about?..." />
      <p>Message</p>
      <input type="message" placeholder="Be as detailed as you can..." />
      <button type="button">Send Message</button>

    </form>
  </div>
);

export default ContactPage;

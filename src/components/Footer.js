/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => (
  <section className="footer-wrapper">
    <div className="footer">
      <div className="footer-info">
        <h4>Art Portolio</h4>
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
      </div>
      <div className="footer-links">
        <h4>Find Out More</h4>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <div className="footer-contact">
        <h4>Say hello to us</h4>
        <p>
          <i className="fas fa-map-marker-alt" />
County, Street name - number
        </p>
        <p>
          <i className="far fa-envelope" />
          <span>hello@artportolio.com</span>
        </p>
        <p>
          <i className="fas fa-phone" />
032 267 899 442
        </p>
      </div>
    </div>
    <p className="copyright">©Copyright. All Rights Reserved.</p>
  </section>
);

export default Footer;

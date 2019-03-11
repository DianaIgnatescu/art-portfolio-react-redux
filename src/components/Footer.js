import React from 'react';

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer">
        <div className="footer-info">
          <h4>Art Portolio</h4>
          <p>
            We are aenean vulputate nisl arcu, non consequat risus vulputate sed. Nulla eu sapien condimentum nisi aliquet
            sodales non et diam. Duis blandit nunc semper rutrum congue. Phasellus sed lacus ut odio vehicula varius. Etiam
            iaculis feugiat tortor ac ornare.great design.
          </p>
          <div className="footer-icons fa-lg">
            <a href="#"><i className="fab fa-facebook fa-lg"></i></a>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fab fa-instagram fa-lg"></i>
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
          <p><i className="fas fa-map-marked fa-lg"></i>County, Street name - number</p>
          <p><i className="fas fa-envelope fa-lg"></i><span>hello@artportolio.com</span></p>
          <p><i className="fas fa-phone-square fa-lg"></i>032 267 899 442</p>
          <p><i className="fas fa-phone-square fa-lg"></i>032 267 899 442</p>
        </div>
      </div>
      <p className="copyright">©Copyright. All Rights Reserved.</p>
    </section>
  );
};

export default Footer;

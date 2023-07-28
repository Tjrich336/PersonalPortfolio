import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {currentYear} Created By Trevor Richardson, All rights reserved.</p>
        <div className="footer__links">
        <a
        href="https://www.linkedin.com/in/trevv/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Tjrich336"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="uil uil-github-alt"></i>
      </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
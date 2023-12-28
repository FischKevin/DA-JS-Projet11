import React from 'react';
import Logo from './Logo';

// function to render the footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo color="white" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

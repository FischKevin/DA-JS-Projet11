import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/">
        <img
          src="src/assets/LOGO.png"
          alt="Logo du site Kasa"
          className="logo"
        />
      </Link>
    </>
  );
}

export default Logo;

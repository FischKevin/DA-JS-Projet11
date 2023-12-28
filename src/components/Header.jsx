import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

// function to render the header
function Header() {
  return (
    <header>
      <Logo color="red" />
      <NavBar />
    </header>
  );
}

export default Header;

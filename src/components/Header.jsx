import React from 'react';
import Logo from './Logo';
import NavBar from './Navbar';

function Header() {
  return (
    <header>
      <Logo color="red" />
      <NavBar />
    </header>
  );
}

export default Header;

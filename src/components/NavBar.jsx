import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/A-Propos">A Propos</Link>
    </nav>
  );
}

export default NavBar;

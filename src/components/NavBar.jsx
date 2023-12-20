import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/components/_navbar.scss';

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/APropos">À Propos</NavLink>
    </nav>
  );
}

export default NavBar;

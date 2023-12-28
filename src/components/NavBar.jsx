import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/components/_navbar.scss';

function NavBar() {
  return (
    <nav className="NavBar">
      {/* 'isActive' is used to dynamically apply the 'active' class based on the current route */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        Accueil
      </NavLink>

      {/* Similar to the first NavLink, it uses 'isActive' to apply styling for the active route */}
      <NavLink
        to="/APropos"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        A Propos
      </NavLink>
    </nav>
  );
}

export default NavBar;

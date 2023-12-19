import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/components/_navbar.scss';


function NavBar() {
  return (
    <nav className='NavBar'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Accueil</NavLink>
      <NavLink to="/APropos" className={({ isActive }) => isActive ? 'active' : undefined}>A Propos</NavLink>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="blue lighten-4">
    <div className="navbar-wrapper">
      <ul>
        <li><Link to='/aboutme'>about me</Link></li>
        <li><Link to='/hobby'>hobby</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

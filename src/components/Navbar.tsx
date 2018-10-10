import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.StatelessComponent<{}> = () => (
  <nav className="blue lighten-4">
    <div className="navbar-wrapper">
      <ul>
        <li>
          <Link to="/aboutme">
            <i className="fa fa-bookmark" />
            about me
          </Link>
        </li>
        <li>
          <Link to="/hobby">
            <i className="fa fa-heart" />
            hobby
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

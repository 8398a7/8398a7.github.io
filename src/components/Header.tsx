import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';
import './Header.css';
import Navbar from './Navbar';

const Header: React.SFC = () => (
  <header>
    <Link to="/">
      <img className="circle responsive-img" src={profile} />
    </Link>
    <h1 style={{ paddingBottom: '10px' }}>@8398a7</h1>
    <p className="main">
      <i className="fa fa-beer" />
      Web Developer
    </p>
    <div />
    <p>aws</p>
    <p>gcp</p>
    <p>rails</p>
    <p>java</p>
    <p>chef</p>
    <p>docker</p>
    <p>react</p>
    <Navbar />
  </header>
);

export default Header;

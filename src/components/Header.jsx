import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import profile from '../images/profile.jpg';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <Link to='/'>
      <img className="circle responsive-img" src={profile} />
    </Link>
    <h1 style={{paddingBottom: '10px'}}>
      @8398a7
    </h1>
    <p className="main">
      <i className="fa fa-beer" />
      Web Developer
    </p>
    <div />
    <p>aws</p>
    <p>rails</p>
    <p>chef</p>
    <p>docker</p>
    <p>react</p>
    <Navbar />
  </header>
)

export default Header;

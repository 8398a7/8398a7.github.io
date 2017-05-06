import React from 'react';
import './Header.scss';
import profile from '../images/profile.jpg';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <img className="circle responsive-img" src={profile} />
    <h1><a href="https://twitter.com/8398a7" style={{color: 'white'}}>@8398a7</a></h1>
    <p className="main">Web Developer</p>
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

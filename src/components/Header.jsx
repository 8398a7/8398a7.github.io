import React from 'react';
import profile from '../images/profile.jpg';
import './Header.scss';

const Header = () => (
  <header>
    <img className="circle responsive-img" src={profile} />
    <h1><a href="https://twitter.com/8398a7" style={{color: 'white'}}>@8398a7</a></h1>
  </header>
)

export default Header;

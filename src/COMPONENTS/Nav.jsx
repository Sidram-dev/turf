import React from 'react';
import logo from '../assets/logo.jpg';

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#register" className="btn">Register</a></li>
        <li><a href="#login" className="btn">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

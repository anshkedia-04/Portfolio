import React from 'react';
// import './Navbar.css';
import './styles.css';
import './Projects.jsx'

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href='./Projects.jsx'>Projects</a></li>
      <li><a href="#certifications">Certifications</a></li>
      <li><a href="#skills">Skills</a></li>
    </ul>
  </nav>
);

export default Navbar;

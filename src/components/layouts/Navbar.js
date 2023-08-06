import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar_logo">
        Git<span style={{ color: '#66c2ff' }}>Hunt</span>
      </Link>
      <ul className="navbar_menus">
        <li className="navbar_menus-item">
          <Link to="/" className="navbar_menus-link">
            Home
          </Link>
        </li>
        <li className="navbar_menus-item">
          <Link to="/about" className="navbar_menus-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

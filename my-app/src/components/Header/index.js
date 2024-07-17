import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="assets/img/image.png" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-video">Nuevo Video</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

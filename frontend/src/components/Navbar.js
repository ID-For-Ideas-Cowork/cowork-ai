import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🤖 CoWork AI
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {/* Descomenta cuando completes las tareas */}
          {/*
          <li className="nav-item">
            <Link to="/chat" className="nav-link">Chat</Link>
          </li>
          <li className="nav-item">
            <Link to="/image-generator" className="nav-link">Imágenes</Link>
          </li>
          <li className="nav-item">
            <Link to="/translator" className="nav-link">Traductor</Link>
          </li>
          <li className="nav-item">
            <Link to="/prompts" className="nav-link">Prompts</Link>
          </li>
          <li className="nav-item">
            <Link to="/sentiment" className="nav-link">Sentimientos</Link>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

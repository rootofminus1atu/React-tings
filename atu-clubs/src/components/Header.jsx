import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
      <div className="container-md container-fluid">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>ATUS</Link>

        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={handleMenuToggle}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/clubs" className="nav-link" onClick={closeMenu}>Clubs</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/register" className="nav-link" onClick={closeMenu}>Register Club</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
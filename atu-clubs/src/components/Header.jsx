import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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


/*
looks nicer except it doesn't work

<Navbar expand="lg" bg="dark" variant="dark" className="p-3">
      <Container className="container-md container-fluid">
        <Navbar.Brand as={Link} to="/clubs">ATUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/clubs" onClick={closeMenu}>
              Clubs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register" onClick={closeMenu}>
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeMenu}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
*/
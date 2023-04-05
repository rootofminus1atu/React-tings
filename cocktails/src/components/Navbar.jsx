import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='text-red-500'>
      <div>
        <NavLink to="/">
          site name logo and image
        </NavLink>
      </div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

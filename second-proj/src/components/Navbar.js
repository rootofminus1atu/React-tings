import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav>
      <ul class="flex justify-evenly bg-slate-700 text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
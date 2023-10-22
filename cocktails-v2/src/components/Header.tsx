import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="logo">logo</div>
      <nav>
        <ul>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/cocktails" className="nav-link">Cocktails</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex items-center gap-6 p-4 bg-gray-200'>
      <div className='text-3xl'>Logo</div>
      <nav>
        <ul className='flex flex-row gap-3'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/questions"}>Questions</Link></li>
          <li><Link to={"/ask"}>Ask</Link></li>
          <li><Link to={"/users"}>Users</Link></li>
        </ul>
      </nav>
    </header>
  )
}

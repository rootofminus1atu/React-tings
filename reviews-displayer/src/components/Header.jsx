import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='relative flex justify-center items-center mb-10 text-4xl'>
      <h1 className='relative z-10'>Our Reviews</h1>
      <div className='absolute left-0 right-0 top-14 h-1'>
        <span className='absolute top-0 right-12 left-12 bottom-0 bg-gradient-to-r from-blue-500  to-sky-500'></span>
      </div>
    </header>
  )
}

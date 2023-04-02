import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ReviewCard from './components/ReviewCard'

function App() {
  return (
    <main 
      className='w-screen h-screen flex flex-col justify-center items-center
        bg-gradient-to-t from-blue-100 to-slate-200'
    >
      <Header />
      <ReviewCard />
    </main>
  )
}

export default App

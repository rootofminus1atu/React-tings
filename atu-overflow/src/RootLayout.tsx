import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function RootLayout() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-4xl mx-auto'>
      <Header />
      <div className='p-8'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout

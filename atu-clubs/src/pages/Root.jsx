import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function Root() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
        <main className="container">
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

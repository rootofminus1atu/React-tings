import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'


export default function Root() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className='flex-grow-1'>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

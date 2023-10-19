import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='container-fluid bg-dark text-white text-center'> 
      <Container>
        <p className='p-4'>
          &copy; 2019 ATUS Clubs & Societies
        </p>
      </Container>
    </footer>
  )
}

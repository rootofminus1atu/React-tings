import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main>
      <h2>Oops! It's a Dead End</h2>
      <Link to="/">Back Home</Link>
    </main>
  )
}

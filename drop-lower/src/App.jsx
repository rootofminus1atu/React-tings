import Navbar from './Navbar'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>welcome hoem</h1>
      <button onClick={() => setCount(n => n+1)}>
        count = {count}
      </button>
    </>
  )
}

export default App

import { useState } from 'react'
import MatrixDataInput from './components/MatrixDataInput'
import Display from './components/Display'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MatrixDataInput />
      <Display />
    </>
  )
}

export default App

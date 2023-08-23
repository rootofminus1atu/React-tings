import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoOption } from './components/VideoOption'

function App() {
  const [options, setOptions] = useState([])
  const [done, setDone] = useState(true)
  const inputRef = useRef(null)

  const signal = async () => {
    const url = inputRef.current.value.trim()

    if (!url) {
      return
    }

    try {
      setOptions([])
      setDone(false)
      const response = await fetch(`/api/qualities?url=${url}`)
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
  
      const options = await response.json()

      // WORK HERE
      
      setOptions(options.streams)
    } catch (error) {
      console.error('Error:', error)
      // Handle the error, you can display an error message to the user or take other appropriate actions.
    }
    setDone(true)
  }
  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={signal}>press me</button>
      { done ? 
        options.map((option, index) => <VideoOption key={index} option={option} />)
      : 
        <h3>Searching...</h3>
      }
      
    </>
  )
}

export default App;

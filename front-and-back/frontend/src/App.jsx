import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  const apiCall = async () => {
    try {
      const response = await fetch('http://localhost:3001/get-message')
      console.log(response);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={apiCall}>press me</button>
      {message && <p>{message}</p>}
    </>
  )
}

export default App

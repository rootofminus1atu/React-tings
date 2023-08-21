import { useState, useEffect, useRef } from 'react'
import Results from './components/Results'


function App() {
  const [results, setResults] = useState([])
  const inputRef = useRef(null);

  // Assume this is in your React component
  const fetchTestRoute = async () => {
    try {
      const response = await fetch('/testlol'); 
      
      console.log(response)
      // Replace with the correct backend URL
      if (!response.ok) {
        console.error('API call failed with status:', response.status);
        return;
      }

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error while making API call:', error);
    }
  };

  return (
    <>
      <button
        onClick={fetchTestRoute}
      >
        TEST THING
      </button>
      
    </>
  )
}

export default App

/*

<input 
        type="text" 
        ref={inputRef}
      />
      <button
        onClick={() => console.log(inputRef.current.value)}
      >
        Search
      </button>
      <Results results={results} />

*/

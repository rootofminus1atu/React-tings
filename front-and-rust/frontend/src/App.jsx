import { useState, useRef, useReducer } from 'react'
import './App.css'
import { VideoOption } from './components/VideoOption'

const ActionType = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
}

const INITIAL_STATE = {
  options: [],
  loading: false,
  error: false,
  firstTime: true
}

const optionsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.FETCH_START:
      return {
        options: [],
        loading: true,
        error: false,
        firstTime: false
      }
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        options: action.payload,
        loading: false,
        error: false
      }
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        options: [],
        loading: false,
        error: true
      }
    default:
      return state
  }
}



function App() {
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(optionsReducer, INITIAL_STATE)

  const signal = async () => {
    const url = inputRef.current.value.trim()

    if (!url) {
      return
    }

    try {
      dispatch({ type: ActionType.FETCH_START })
      const response = await fetch(`/api/qualities?url=${url}`)
  
      if (!response.ok) {
        console.log("lol error")
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
  
      const options = await response.json()

      dispatch({ type: ActionType.FETCH_SUCCESS, payload: options.streams })

    } catch (error) {
      console.error('Error:', error)
      dispatch({ type: ActionType.FETCH_ERROR })
    }
  }

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={signal}>press me</button>
      {
        state.firstTime ? <p>Enter a URL to get started</p> : 
        state.loading ? <p>Loading...</p> :
        state.error ? <p>Error</p> :
        state.options.map((option, index) => <VideoOption key={index} option={option} />)
      }
    </>
  )
}

export default App;

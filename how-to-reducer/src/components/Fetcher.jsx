import React from 'react'
import { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from '../postReducer'

export default function Fetcher() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" })
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data })
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" })
      })
  }

  return (
    <div className='fetcher'>
      <h1>A data fetcher</h1>
      <button onClick={handleFetch}>
        {state.loading ? "Loading..." : "Fetch the Post"}
      </button>
      <p>{state.post.title}</p>
      <span>{state.error && "Something went wrong"}</span>
    </div>
  )
}

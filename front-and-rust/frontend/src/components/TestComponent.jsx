import React from 'react'
import useFetchOnClick from '../hooks/generalFetchMechanism'

export default function TestComponent() {
  const [state, fetchOnClick] = useFetchOnClick(response => response.json())

  return (
    <div>
      <p>test component</p>
      <button
        onClick={() => fetchOnClick("https://api.chucknorris.io/jokes/random")}
      >
        Chuck Norris Fact
      </button>
      {
        state.nthFetch === 0 ? <p>Press the button to get started</p> :
        state.loading ? <p>Loading...</p> :
        state.error ? <p>Error</p> :
        <p>{state.data.value}</p>
      }
		</div>
  )
}

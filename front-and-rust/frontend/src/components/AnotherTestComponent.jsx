import React from 'react'
import useFetchV2 from '../hooks/fetcherv2'

export default function AnotherTestComponent() {
  const [state, fetchOnClick] = useFetchV2("https://api.chucknorris.io/jokes/random")

  console.log(state)

  const getChuckNorris = () => {
  }

  return (
    <div>
      <button onClick={fetchOnClick}>fetch</button>
      {
        state.loading ? <p>Loading...</p> :
        state.error ? <p>Error</p> :
        <p>hi</p>
      }
      hi
    </div>
  )
}

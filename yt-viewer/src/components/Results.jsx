import React from 'react'
import ResultItem from './ResultItem'

export default function Results({ results }) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(result => (
          <li><ResultItem key={result} result={result} /></li>
        ))}
      </ul>
    </div>
  )
}

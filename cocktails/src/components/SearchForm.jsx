import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()

  return (
    <div>
      SearchForm
    </div>
  )
}

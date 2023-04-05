import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()

  if(loading) {
    return <Loading />
  }

  if(cocktails.length < 1) {
    return (
      <h2>
        No cocktails found
      </h2>
    )
  }

  return (
    <div>CocktailList</div>
  )
}

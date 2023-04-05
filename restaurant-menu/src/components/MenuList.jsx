import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({food}) {
  return (
    <ul>
      {food.map(item => {
        return <MenuItem key={item.id} item={item}/>
      })}
    </ul>
  )
}

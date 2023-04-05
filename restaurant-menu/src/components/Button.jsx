import React from 'react'

export default function Button({category, updateMenu}) {
  return (
    <button className='menu-btn'
      onClick={() => updateMenu(category)}
    >
      {category}
    </button>
  )
}

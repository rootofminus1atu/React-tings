import React from 'react'
import Button from './Button'

export default function ButtonList({updateMenu, allCategories}) {
  return (
    <div className='menu-btn-container'>
      {allCategories.map(category => {
        return (
          <Button 
            key={category} 
            category={category} 
            updateMenu={updateMenu}
          />
        )
      })}
    </div>
  )
}

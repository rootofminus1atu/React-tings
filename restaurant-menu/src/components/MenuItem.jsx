import React from 'react'

export default function MenuItem({item}) {
  const {name, price, image, description} = item

  return (
    <li className='menu-item'>
      <img src={image} alt={name} />
      <aside>
        <div className="name-price">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <p>{description}</p>
      </aside>
    </li>
  )
}

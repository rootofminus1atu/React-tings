import React from 'react'
import ButtonList from './ButtonList'
import MenuList from './MenuList'
import menu from './data'
import { useState } from 'react'

const allCategories = ['all', ...new Set(menu.map(item => item.category))]

export default function MenuLogic() {
  const [food, setMenu] = useState(menu)

  const updateMenu = (category) => {
    if (category === 'all') return setMenu(menu)
    else setMenu(menu.filter(item => item.category === category))
  }

  return (
    <section>
      <ButtonList updateMenu={updateMenu} allCategories={allCategories}/>
      <MenuList food={food}/>
    </section>
  )
}

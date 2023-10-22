import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Root from './Root'
import About from './pages/About'
import Home from './pages/Home'
import Cocktails, { loader as cocktailListLoader } from './pages/Cocktails'
import CocktailDetails, { loader as cocktailLoader } from './pages/CocktailDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route 
        path="cocktails" 
        loader={cocktailListLoader}
        element={<Cocktails />}
      >
        <Route 
          path=":cocktailId" 
          loader={cocktailLoader}
          element={<CocktailDetails />} 
        />
      </Route>
      <Route path="about" element={<About />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

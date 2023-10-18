import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Root from './pages/Root'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import ClubDetails, {
  loader as clubLoader
} from './pages/ClubDetails'
import Contact from './pages/Contact'
import Register from './pages/Register'

const objRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "clubs",
        element: <Clubs />,
        children: [
          {
            path: ":clubId",  // doesn't work for some reason
            element: <ClubDetails />
          }
        ]
      },
      
    ]
  }
])

const elemRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="clubs">
        <Route index element={<Clubs />} />
        <Route 
          path=":clubId" 
          element={<ClubDetails />} 
          loader={clubLoader}
        />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={elemRouter} />
  </React.StrictMode>,
)

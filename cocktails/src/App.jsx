import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import About from './pages/About' 
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

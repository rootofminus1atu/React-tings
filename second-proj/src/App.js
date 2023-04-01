import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

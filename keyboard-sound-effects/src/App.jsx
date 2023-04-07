import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import vineboom from './assets/vineboom.wav'

function App() {
  return (
    <div className="App">
      <h1>me when can't listen to keyboard presses when window minimalized.. :(</h1>
      <Player url={vineboom}/>
    </div>
  )
}

export default App

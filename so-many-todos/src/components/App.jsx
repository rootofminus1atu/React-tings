// import { useState } from 'react'
import './App.css'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'

function App() {

  return (
    <div className="flex flex-col items-center h-screen">
      <Header />
      <TodosLogic />
    </div>
  )
}

export default App

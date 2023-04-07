import React, { useRef, useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

export default function InputTodo({ addTodo }) {
  const [message, setMessage] = useState("")
  const titleRef = useRef()
  // how can I use this useRef hook to simplify this component?

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = titleRef.current.value
    if (title.trim()) {
      addTodo(title)
      titleRef.current.value = ""  // not very halal pure
      setMessage("Item added")
    } else {
      setMessage("Please enter a title")
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex justify-between border rounded border-gray-600 p-3 shadow-lg">
        <input 
          type="text" 
          placeholder="Add something..." 
          ref={titleRef}
        />
        <button><FaPlusCircle /></button>
      </form>
      <div className="flex items-center h-5">
        <span className="text-red-900 text-xs ml-4">{message}</span>
      </div>
    </section>
  )
}
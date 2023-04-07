import { useState, useRef } from 'react'
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

export default function TodoItem({itemProp, handleChange, delTodo, updateTodo}) {
  const [editing, setEditing] = useState(false)
  const editInputRef = useRef()

  const handleEditing = () => {
    setEditing(!editing)
  }

  const handleEditingDone = (event) => {
    if (event.key === 'Enter') {
      updateTodo(editInputRef.current.value, itemProp.id)
      setEditing(false)
    }
  }

  return (
    <li className="flex justify-between">
      <div className="flex items-center">
        <input 
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className="w-6 h-6"
        />
        <div className='mx-3'>
          {!editing ? (
            <p>
              {itemProp.title}
            </p>): (
            <input 
              type="text"
              ref={editInputRef}
              defaultValue={itemProp.title}
              // value={itemProp.title}
              // onChange={(e) => {updateTodo(e.target.value, itemProp.id); console.log(e.target.value)}}
              // the aboute is bad, unless you need to know the state at each point in time
              onKeyDown={handleEditingDone}
              className={editing ? "block" : "hidden"} 
            />)
          }
        </div>
      </div>
      <div>
        <button 
          onClick={handleEditing}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-2"
        >
          <AiFillEdit />
        </button>
        <button 
          onClick={() => delTodo(itemProp.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  )
}
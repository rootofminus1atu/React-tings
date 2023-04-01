import React from 'react'

export default function TodoStats({todos, delCompletedTodos}) {
  return (
    <section className='flex flex-col items-middle'>
      <div className='flex justify-between'>
        <p>{todos.length} todos</p>
        <p>{todos.filter(todo => todo.completed).length} completed</p>
      </div>
      <div className='flex justify-center'>
        {todos.length > 0 &&
        <button 
          onClick={delCompletedTodos}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'
        >
          Delete completed todos
        </button>
        }
      </div>
    </section>
  )
}

import InputTodo from "@/components/InputTodo"
import TodoList from "@/components/TodoList"
import TodoStats from "@/components/TodoStats"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export default function TodosLogic() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const temp = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      setTodos(prevTodos => [...prevTodos, ...loadedTodos])
    }
  }, [])

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    //setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    const afterTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(afterTodos)
    /*
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      })
    ])*/
  }

  const delCompletedTodos = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.completed))
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const updateTodo = (newTitle, id) => {
    setTodos((prevState) => 
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle
          }
        }
        return todo
      })
    )
  }

  return (
    <section className="">
      <InputTodo 
        addTodo={addTodo}
      />
      <TodoList 
        todosProps={todos} 
        handleChange={handleChange}
        delTodo={delTodo}
        updateTodo={updateTodo}
      />
      <TodoStats
        todos={todos}
        delCompletedTodos={delCompletedTodos}
      />
    </section>
  )
}
  
import TodoItem from "@/components/TodoItem";

export default function TodoList(props) {
  const {todosProps, handleChange, delTodo, updateTodo} = props;

  return (
    <ul className="grid gap-4">
      {todosProps.map((todo) => (
        <TodoItem 
          key={todo.id} 
          itemProp={todo} 
          handleChange={handleChange}
          delTodo={delTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  )
}
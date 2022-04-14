import React from 'react'
import Todo from './Todo'
function TodoList({todos, toggleTodo}) {
  return (
   todos.map( todo => {
       return <Todo key={todo.id} todo = {todo} />
   })
  )
}

export default TodoList
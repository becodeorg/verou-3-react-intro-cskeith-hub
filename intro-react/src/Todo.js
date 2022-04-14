import React from 'react'

function Todo({todo, toggleTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div>
        
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
         <div>
         {todo.name}
           </div>
        </label>
    </div>
  )
}

export default Todo
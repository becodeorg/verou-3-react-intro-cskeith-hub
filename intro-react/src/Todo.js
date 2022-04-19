import React from 'react'

function Todo({todo, toggleTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div className='todoBox'>
        
        <label>
            <input className='checkBox'  type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
         <div className='todo'>
         {todo.name}
           </div>
        </label>
    </div>
  )
}

export default Todo
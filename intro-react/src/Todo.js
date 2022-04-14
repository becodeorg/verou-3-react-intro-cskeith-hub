import React from 'react'

function Todo({todo}) {
  return (
    <div>
        
        <label>
            <input type="checkbox" checked={todo.complete} />
         <div>
         {todo.name}
           </div>
        </label>
    </div>
  )
}

export default Todo
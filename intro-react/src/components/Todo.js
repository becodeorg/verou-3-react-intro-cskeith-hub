import React from 'react' // RAFCE function

const Todo = (props) => {
  return (
    <li>
      <input type="checkbox" />{props.todo}
    </li>
  )
}

export default Todo
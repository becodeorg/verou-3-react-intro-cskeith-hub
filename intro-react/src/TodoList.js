import React from 'react';

export default function TodoList() {
    const todos = ["Afwassen", "Auto Opruimen"];
  return (
    <ul>
    {todos.map((todo) => (
      <li>
        <input type="checkbox" /> {todo}
      </li>
    ))}
  </ul>
  )
}

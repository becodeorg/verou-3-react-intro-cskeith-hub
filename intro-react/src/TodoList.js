import React, {useState} from 'react';

export default function TodoList() {
    const todos = ['Afwassen', 'Auto Opruimen'];
    const todoItems = todos.map((todo) =>
    <li key={todo}>
      <input type="checkbox" />{todo}
    </li>
    );
  return (
    <ul>
      {todoItems}
    </ul>
  );
}

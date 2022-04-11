import React from 'react';

export default function TodoList() {
    const todo = ["Afwassen", "Auto Opruimen"];
  return (
    <ul>
    <li>
      <input type="checkbox" /> My first todo
    </li>
    <li>
      <input type="checkbox" /> My second todo
    </li>
  </ul>
  )
}

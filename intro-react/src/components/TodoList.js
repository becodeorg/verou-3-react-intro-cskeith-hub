import React, {useState} from 'react';
import Todo from './Todo';

export default function TodoList(props) {
   let todos = props.todos;
   
  return (
  <ul>
    {todos.map((todo, index)=>{
      return (
        <Todo key={index} todo={todo}/>
      )
    })}
  </ul>
  );
}

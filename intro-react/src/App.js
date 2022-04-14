import {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const STORE_KEY = 'todoApp.todos'

function App() {
 const [todos, setTodos ] = useState([])
 const todoNameRef = useRef()

 useEffect(() => { // Try to Get data
  const storedTodos = JSON.parse(localStorage.getItem(STORE_KEY)) 
  if (storedTodos) setTodos(storedTodos)
 },[])

 useEffect(() => { // Try to save data
  localStorage.setItem(STORE_KEY, JSON.stringify(todos))
 }, [todos])

 function handleAddTodo(e) {
 const name = todoNameRef.current.value
 if(name === '') 
  return
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, complete: false}
    ]})
    console.log(name)
    todoNameRef.current.value = null
 }
  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
    
  )
 
}

export default App;

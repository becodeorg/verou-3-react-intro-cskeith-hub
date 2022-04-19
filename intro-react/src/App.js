import {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import "./Styles/main.css"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
 const [todos, setTodos ] = useState([])
 const todoNameRef = useRef()

 useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos?.length) setTodos(storedTodos)
 
 },[])

 useEffect(() => { // Try to save data
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
 }, [todos])


 function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
 }

 function handleAddTodo(e) {
 const name = todoNameRef.current.value
 if(name === "") 
  return
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, complete: false}
    ]})
    todoNameRef.current.value = null
 }

 function handleClearTodos() {
   const newTodos = todos.filter(todo => !todo.complete)
   setTodos(newTodos)
 }
  return (
    <>
      <h1>Task Manager</h1>
      <div className="countTodo">{todos.filter(todo => !todo.complete).length} left to do</div>

      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input className="inputField" ref={todoNameRef} type="text"></input>
      <button className="addButton" onClick={handleAddTodo}>Add Todo</button>
      <button className="clearButton" onClick={handleClearTodos}>Clear Completed</button>
      
    </>
    
  )
 
}

export default App;

import {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import "./Styles/main.css"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const todoNameRef = useRef()
  const [todos, setTodos ] = useState([])

  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos?.length) setTodos(storedTodos)

  },[])

  useEffect(() => { // Try to save data
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

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

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
   }
  return (
    <>
      <h1>Task Manager</h1>
      <div className="todoContainer">
        <div className="countTodo">{todos.filter(todo => !todo.complete).length} left to do</div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
     
      <div className="form">
        <input className="inputField" ref={todoNameRef} type="text"></input>
        <button className="addButton" onClick={handleAddTodo}>Add Todo</button>
        <button className="clearButton" onClick={handleClearTodos}>Clear Completed</button>
      </div>
     
    </>
    
  )
 
}

export default App;

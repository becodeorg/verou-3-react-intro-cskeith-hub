import {useState, useRef, useEffect} from "react";
import TodoList from "./components/TodoList";
import Form from "./Form";


function App() {
 const [todos, setTodos] = useState([]); // var to catch a state
 const newTodo = useRef();  // a way to follow changes in elements or text
 const handleChange = () => { // change handeler
   console.log(newTodo.current.value);
 }
 
useEffect(() => {
 let storedTodo = JSON.parse(localStorage.getItem('myTodo'));
 console.log(storedTodo);
 if(storedTodo){
  setTodos(storedTodo);
 }
},[]);
 console.log(todos);


  return (
    <>
    <Form />
    <TodoList todos={todos}/>
    </>
  
  )
}

export default App;

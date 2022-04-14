import {useState, useRef, useEffect} from "react";
import TodoList from "./components/TodoList";


function App() {
 const [todos, setTodos] = useState([""]); // var to catch a state
 const newTodo = useRef();  // a way to follow changes in elements or text
 const handleChange = () => { // change handeler
    // setTodos(evt.currentTarget.value);
  //  setTodos(newTodo.current.value); 
  
 }

 const onChangeHandler = event => {
  setInputValue(event.target.value);
};
 
useEffect(() => {
 let storedTodo = JSON.parse(localStorage.getItem('myTodo'));
 if(storedTodo){
  setTodos(storedTodo);
 }
},[]);

  return (
    <>
    <input type="text" name="todoField"    />
    <button onChange={onChangeHandler}
        value={todos}>ADD Todo</button>
    
    <TodoList todos={todos}/>

    </>
  )
}

export default App;

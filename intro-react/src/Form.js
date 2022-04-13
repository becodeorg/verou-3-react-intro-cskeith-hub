import {useState} from 'react'

const Form = () => {
    const [NewTodo, setNewTodo] = useState({
        todo: ""
    });
  return (
    <Form >
    <label >
        New Todo:
        <input type="text" name="todo" id="todo" value={NewTodo.name} />
    </label>
    <input type="submit" value="Submit"  />
    </Form>  
  )
}

export default Form
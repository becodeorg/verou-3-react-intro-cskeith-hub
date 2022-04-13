import {useState} from 'react'

const Form = () => {
    const [NewTodo, setNewTodo] = useState({
        todo: ""
    });

const handleChange = (event) => {
    setContactInfo({ ...NewTodo, [event.target.todo]: event.target.value });
    };
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
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Actions'

const FormTodo = () => {

const [newTask, setNewTask] = useState('')
const handleChange=(e)=>{
    setNewTask(e.target.value)
}
const dispatch = useDispatch()
const handleSubmit=(e)=>{
    if (newTask!== ''){
    e.preventDefault()
    dispatch(addTask({
        description : newTask
    }))
    setNewTask('')
}else{
    alert('this field is mandatory')
}
}



    return (
        <form>
            <input 
            type="text"
            placeholder='Enter a todo...'
            onChange={handleChange}
            value={newTask}
            />
            <button type="submit" onClick={handleSubmit}>
                Add
            </button>
           
        </form>
    )
}

export default FormTodo

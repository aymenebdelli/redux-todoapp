import React from 'react'
import Task from "./Task"
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'


const TaskList = () => {

 const tasks = useSelector(state => state.tasksReducer.tasks) 

    return (
        <div>
            {
                tasks.map((taskData, index)=>
                <Task taskData={taskData} key={index} index={index}/>
               )
            }
        </div>
    )
}

export default TaskList

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadTask, deleteTask } from '../Redux/Actions'
import EditTask from './EditTask'
import { Button } from 'react-bootstrap'



const Task = ({ taskData, index }) => {

    const dispatch = useDispatch()

    const handleDone = () => {
        dispatch(uploadTask({
            id: taskData.id
        }))
    }

    const handleDelete = () => {
        dispatch(deleteTask({
            id: taskData.id
        }))
    }

    return (
        <div>
          
            <div>
                <h2 style={{ textDecoration: taskData.isDone ? "line-through" : "none" }}>{`${index + 1}/- ${taskData.description}`}</h2>
            </div>
            <div >
                <Button variant="success" onClick={handleDone}>{taskData.isDone ? "Undo" : "Done"}</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                <EditTask taskData={taskData} />
            </div>
            
        </div>
    )
}

export default Task

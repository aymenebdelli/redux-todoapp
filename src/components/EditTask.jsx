import React, { useState } from 'react'
import { Modal, Button, FormControl } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { editTask } from "../Redux/Actions"
import { Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'


function EditTask({ taskData }) {
    const [show, setShow] = useState(false);
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newDescription, setNewDescription] = useState("")
    const handleChange = (e) => {
        setNewDescription(e.target.value)
    }
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editTask({
            id: taskData.id,
            newDescription: newDescription
        }))
        handleClose()
    }


    return (
        <>
            <Helmet>
                <title>Task Manager</title>
            </Helmet>
            <Button variant="primary" onClick={handleShow}>
                Edit Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Edit Task</Modal.Body>
                <FormControl
                    type="text"
                    placeholder="Enter a todo..."
                    className="input-add"
                    defaultValue={taskData.description}
                    onChange={handleChange}
                />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="btn-wrapper">
                <Link to="/" className="btn-link">
                    Back to Tasks
                </Link>
            </div>
        </>
    );
}

export default EditTask
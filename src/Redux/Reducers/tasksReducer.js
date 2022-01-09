import { v4 as uuidv4 } from 'uuid'
import { ADD_TASK, UPLOAD_TASK, DELETE_TASK, EDIT_TASK } from '../constants/action-types'

const initialState = {
    tasks: []
}

function tasksReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, { id: uuidv4(), description: payload.description, isDone: false }]
            }

        // complete task (uploading tasks)
        case UPLOAD_TASK:
            return {
                tasks:
                    state.tasks.map(task => (task.id === payload.id) ? { ...task, isDone: !task.isDone }
                        : task)
            }
        // delete task (bouton d'effacement)
        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== payload.id)
            }
        // edit task (changement ou modification de task)
        case EDIT_TASK:
            return {
                tasks:
                    state.tasks.map(task => (task.id === payload.id) ? { ...task, description: payload.newDescription }
                        : task)
            }
        default:
            return state
    }
}

export default tasksReducer
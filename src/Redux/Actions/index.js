import { ADD_TASK, UPLOAD_TASK , DELETE_TASK , EDIT_TASK} from "../constants/action-types"

export const addTask = (payload) =>{
    return{
        type: ADD_TASK, 
        payload
    }
}

export const uploadTask = (payload) =>{
    return{
        type: UPLOAD_TASK, 
        payload
    }
}

export const deleteTask = (payload) =>{
    return{
        type: DELETE_TASK, 
        payload
    }
}

export const editTask = (payload) =>{
    return{
        type: EDIT_TASK, 
        payload
    }
}
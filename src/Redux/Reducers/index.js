import {combineReducers} from "redux"
import tasksReducer from "./tasksReducer"
import usersReducers from "./usersReducers"

const rootReducer = combineReducers({
tasksReducer,usersReducers
})

export default rootReducer
import {
    LOGIN,
    REGISTER,
    SET_LOADING,
    SET_LOGIN_ERROR,
    SET_USER,
  } from '../constants/action-types'
  
  const initialState = {
    user: null,
    error: null,
    isLoading: false,
  }
  

  function  usersReducers(state = initialState, action){
    switch (action.type) {
      case REGISTER:
      case SET_USER:
      case LOGIN:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
        }
  
      case SET_LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
      case SET_LOADING:
        return {
          ...state,
          isLoading: true,
        }
      default:
        return state
    }
  }

  export default usersReducers
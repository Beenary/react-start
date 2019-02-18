import {
  SET_USER,
  REMOVE_USER
} from './UserActions'

  
export default function user(state = {}, action){
  switch(action.type){
    
    case SET_USER:
      return {
        ...state,
        ...action.user
      }

    case REMOVE_USER: {
      return {}
    }
    
    default:
      return state
    
  }
}
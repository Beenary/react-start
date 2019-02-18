
import {
  SET_AUTH,
  REMOVE_AUTH,
} from './AuthActions'

const initialState = {
  isAuthenticated: false,
}

export default function auth(state = initialState, action){
  switch(action.type){
    case SET_AUTH:
      return{
        ...state,
        isAuthenticated: action.isAuthenticated
      }

    case REMOVE_AUTH:
      return{
        ...state,
        isAuthenticated: false
    }

    default: {
        return state
    }
  }
}
  
import { getUser } from '../api/user'
import { handleRemoveAuth } from '../auth/AuthActions'


export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'


export function setUser(user){
  console.log(user)
  return {
    type: SET_USER,
    user
  }
}

export function removeUser(){
  return {
    type: REMOVE_USER,
  }
} 


export function handleSetUser(token){
  return(dispatch) => {
    return getUser(token)
      .then(({data}) => dispatch(setUser(data)))
      .catch(() => dispatch(handleRemoveAuth()))
  }
}
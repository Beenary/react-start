import { AuthService } from '../api/auth'
import Cookies from 'universal-cookie'
import { removeUser } from '../user/UserActions'

export const SET_AUTH = 'SET_AUTH'
export const REMOVE_AUTH = 'REMOVE_AUTH'


const cookies = new Cookies();

export function setAuth(isAuthenticated){
  return {
    type: SET_AUTH,
    isAuthenticated
  }
}

export function removeAuth(){
  return {
    type: REMOVE_AUTH
  }
}

export function handleSetAuth(email, password) {
  return(dispatch) => {
    return AuthService(email, password)
      .then(({access_token}) => {
        const isAuthenticated = access_token ? true : false
        cookies.set('x-access', access_token, {path: '/'})

        dispatch(setAuth(isAuthenticated))
        return access_token
      })
  }
}


export function handleRemoveAuth() {
  return(dispatch) => {
    cookies.remove('x-access', {path: '/'})
    dispatch(removeAuth())
    dispatch(removeUser())
  }
}
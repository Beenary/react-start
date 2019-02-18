import axios from 'axios'
import { trowNewError } from '../helpers/error'
import {
  CLIENT_ID, 
  CLIENT_SECRET, 
  GRANT_TYPE 
} from '../constants/jwt'

import { 
  API_PATH
 } from '../constants/api'

export function AuthService(username, password){
  return axios({
    method: 'post',
    url: `${API_PATH}/oauth/token`,
    data: {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      username: username,
      password: password,
      scope: ""
    },
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => console.log(res) || res.status === 200 && res.data)
  .catch(error => console.log(error) || trowNewError('Usuario no autorizado'))
}
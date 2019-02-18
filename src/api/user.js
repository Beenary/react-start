import axios from 'axios'
import { trowNewError } from '../helpers/error'

import { 
  API_PATH
 } from '../constants/api'


 export function getUser(token){
  return axios({
    method: 'get',
    url: `${API_PATH}/user/profile`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => console.log(res) || res.status === 200 && res.data)
  .catch(({response}) => {
    if(response.status === 401){
      return trowNewError('Usuario no autorizado')
    }
  })
 }
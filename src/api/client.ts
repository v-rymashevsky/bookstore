import axios from 'axios'

import { baseEndpoint } from './endpoints'
export const client = axios.create({

  baseURL: baseEndpoint,
  timeout: 3000

})

// export const setAccessTokenClient = (token) => {
//   if (!token) return

//   client.defaults.headers.common.Authorization = 'Bearer ' + token
// }

import axios from 'axios'

import { baseEndpoint } from './endpoints'
export const client = axios.create({

  baseURL: baseEndpoint,
  timeout: 3000

})

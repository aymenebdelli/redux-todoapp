import axios from 'axios'
const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
})

export default apiRequest
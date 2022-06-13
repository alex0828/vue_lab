import axios from 'axios'

const service = axios.create({
  baseURL: window.location.hostname === 'localhost'
    ? process.env.VUE_APP_BASE_URL
    : process.env.VUE_APP_API_PATH,
  timeout: 8000
})

export default service

import axios from 'axios'

export const talanaApi = axios.create({
  baseURL: `http://${process.env.VUE_APP_API_TALANA}/api/`
})

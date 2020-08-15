import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.RAZZLE_API_URL
})

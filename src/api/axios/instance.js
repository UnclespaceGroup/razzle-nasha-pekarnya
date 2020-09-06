import axios from 'axios'

const localApiUrl = 'http://localhost:1337'
const productionApiUrl = 'https://cms.nasha-pekarnya11.ru/'

export const botUrl = 'http://bot.nasha-pekarnya11.ru/bot'

// Текущий url сервера
export const apiUrl = process.env.RAZZLE_IS_LOCAL_API === 'true' ? localApiUrl : productionApiUrl

console.log(process.env.RAZZLE_IS_LOCAL_API, process.env.RAZZLE_IS_LOCAL_API === 'true', apiUrl)

export const axiosInstance = axios.create({
  baseURL: apiUrl
})

export const axiosLocal = axios.create()

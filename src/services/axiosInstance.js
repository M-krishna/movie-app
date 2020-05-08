import axios from 'axios'
import config from './config'

const axiosInstance = axios.create({
    baseURL: config.BASE_URL
})

export default axiosInstance
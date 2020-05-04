import axios from 'axios'
import config from './config'

const axiosInstance = axios.create({
    baseURL: config.BASE_URL
})

const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get('/movies')
            .then((response) => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export {
    getAllMovies
}
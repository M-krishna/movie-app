import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/v1/api'
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
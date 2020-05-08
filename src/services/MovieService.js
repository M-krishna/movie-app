import axiosInstance from './axiosInstance'

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

const getMovie = (id) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/movies/${id}`)
            .then((response) => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export {
    getAllMovies,
    getMovie
}
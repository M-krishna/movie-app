import axiosInstance from './axiosInstance'

const login = data => {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/auth/login', data)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export {
    login
}
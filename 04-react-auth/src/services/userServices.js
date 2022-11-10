import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

// Referencia: https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js

axios.interceptors.request.use(
  (config) => {
    const user = window.localStorage.getItem('token')

    if (user) {
      config.headers.Authorization = `JWT ${user}`
    }
    console.log('request config headers', config.headers)
    return config
  },
  (error) => {
    // console.log("request error", error);
    return Promise.reject(error)
  }
)

const registerUserServices = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserServices = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`)

export {
  registerUserServices,
  loginUserServices,
  getSingleUser
}

import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const token = window.localStorage.getItem('token')

const config = {
  headers: {
    Authorization: `JWT ${token}`
  }
}

const registerUserServices = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserServices = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`, config)

export {
  registerUserServices,
  loginUserServices,
  getSingleUser
}

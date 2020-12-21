import axios from 'axios'

export const setUser = user => {
    return{
        type: 'SET_USER',
        payload: user
    }
}


export const registration = async (...values) => {
    try {
        const response = await axios.post('http://localhost:3050/api/auth/registration', ...values)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const login = (...values) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3050/api/auth/login', ...values)
        dispatch(setUser(response.data))
    } catch (error) {
        console.log(error)
    }
}
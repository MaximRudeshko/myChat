import axios from 'axios'

export const setUser = user => {
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    return {
        type: 'LOGOUT'
    }
}


export const registration = async (...values) => {
    try {
        console.log(values)
        const response = await axios.post('http://localhost:3050/api/user/registration', ...values)
        
    } catch (error) {
        console.log(error)
    }
}

export const login = (...values) => async dispatch => {
    console.log(values)
    try {
        const response = await axios.post('http://localhost:3050/api/user/login', ...values)
        dispatch(setUser(response.data))
        localStorage.setItem('token', response.data.token)
    } catch (error) {
        console.log(error)
    }
}

export const auth = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3050/api/user/auth', {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        localStorage.setItem('token', response.data.token)
        dispatch(setUser(response.data))
    } catch (error) {
        console.log(error)
    }
}
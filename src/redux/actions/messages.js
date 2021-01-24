import axios from 'axios'


export const setCurrentMessages = (items) => {
    return {
        type: 'SET_CURRENT_MESSAGES',
        payload: items
    }
}

export const setLoading = val => {
    return {
        type: 'MESSAGES:SET_LOADING',
        payload: val
    }
}

export const addMessage = msg => {
    return{
        type: 'MESSAGES:ADD_MESSAGE',
        payload: msg
    }
}


export const sendMessage = (dialog, text, user) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:3050/api/messages/create`, {dialog, text, user})
    } catch (error) {
        console.log(error)
    }
}

export const fetchMessages = dialogId => async dispatch => {
    dispatch(setLoading(true))
    const res = await axios.get(`http://localhost:3050/api/messages/${dialogId}`)
    dispatch(setCurrentMessages(res.data))
}


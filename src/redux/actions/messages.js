import ChatApi from "../../services/chatApi"



const api = new ChatApi()

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

export const fetchMessages = (userId) => dispatch => {
    dispatch(setLoading(true))
    api.getDialog(userId)
        .then(data => dispatch(setCurrentMessages(data)))
        .catch(() => dispatch(setLoading(false)))
}


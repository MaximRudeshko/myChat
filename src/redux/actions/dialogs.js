import axios from 'axios'



export const setLoading = value => {
    return{
        type: 'DIALOGS:SET_LOADING',
        payload: value
    }
}

const setError = () => {
    return{
        type:'DIALOGS:SET_ERROR'
    }
}

export const setCurrentDialog = userId => {
    return{
        type: 'DIALOGS:SET_CURRENT_DIALOG',
        payload: userId
    }
}

const setDialogs = items =>  {
    return{
        type: 'DIALOGS:SET_DIALOGS',
        payload: items
    }
}


export const fetchDialogs = user => async dispatch => {
    try {
        dispatch(setLoading(true))
        const res = await axios.get(`http://localhost:3050/api/dialogs/${user}`)
        dispatch(setDialogs(res.data))
    } catch (error) {
        console.log(error)
        dispatch(setError())
    }
}


export const createDialog = (owner, interlocutor) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:3050/api/dialogs/create', {owner, interlocutor, text: 'HELLO MUTHERFUCKER!!!'})
        
    } catch (error) {
        console.log(error)
    }
}



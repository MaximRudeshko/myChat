const { default: DialogsApi } = require("../../services/chatApi");

const api = new DialogsApi()

export const setLoading = value => {
    return{
        type: 'SET_LOADING',
        payload: value
    }
}

export const setCurrentDialog = userId => {
    return{
        type: 'SET_CURRENT_DIALOG',
        payload: userId
    }
}

export const setDialogs = items =>  {
    return{
        type: 'SET_DIALOGS',
        payload: items
    }
}


export const fetchDialogs = () => dispatch => {
    dispatch(setLoading(true))
    api.getAllDialogs()
        .then(data => {
            dispatch(setDialogs(data))
            dispatch(setLoading(false))
        })
}




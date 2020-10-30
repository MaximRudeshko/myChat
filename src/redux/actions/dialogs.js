const { default: DialogsApi } = require("../../services/dialogsApi");

const api = new DialogsApi()

export const setLoading = value => {
    return{
        type: 'SET_LOADING',
        payload: value
    }
}

const setDialogs = items =>  {
    return{
        type: 'SET_DIALOGS',
        payload: items
    }
}

export const fetchDialogs = () => dispatch => {
    api.getDialogs()
        .then(data => {
            dispatch(setDialogs(data))
            dispatch(setLoading(false))
        })
}




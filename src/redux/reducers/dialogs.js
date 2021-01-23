const initialState = {
    dialogs: [],
    currentDialog:null,
    loading:false,
    error: false
}

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case 'DIALOGS:SET_DIALOGS':
            return {
                ...state,
                loading: false,
                dialogs: action.payload
            }
        case 'DIALOGS:SET_CURRENT_DIALOG':
            return {
                ...state,
                currentDialog: action.payload
            }
        case 'DIALOGS:SET_LOADING':
            return{
                ...state,
                loading: action.payload
            }
        case 'DIALOGS:SET_ERROR' : 
            return{
                ...state,
                error: true
            }
        default:
            return state
    }
}

export default dialogs
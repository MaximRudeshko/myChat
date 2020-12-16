const initialState = {
    dialogs: [],
    currentDialog:null,
    loading:false
}

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DIALOGS':
            return {
                ...state,
                dialogs: action.payload
            }
        case 'SET_CURRENT_DIALOG':
            return {
                ...state,
                currentDialog: action.payload
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default dialogs
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
        case 'DIALOGS:UPDATE_LAST_MESSAGE':
            const dialogIndex = state.dialogs.findIndex(dialog => dialog._id === action.payload.dialog)
            
            const newDialog = {
                ...state.dialogs[dialogIndex],
                lastMessage: action.payload.text
            }

            const newDialogs = [...state.dialogs.slice(0, dialogIndex), newDialog, ...state.dialogs.slice(dialogIndex + 1)]

            return{
                ...state,
                dialogs: newDialogs
            }
        default:
            return state
    }
}

export default dialogs
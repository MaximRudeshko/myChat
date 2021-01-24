const initialState = {
    messages: null,
    loading: false
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_MESSAGES':
            return {
                ...state,
                messages: action.payload,
                loading: false
            }
        case 'MESSAGES:SET_LOADING': 
            return {
                ...state,
                loading: action.payload
            }
        case 'MESSAGES:ADD_MESSAGE': 
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}

export default messages
const initialState = {
    user: null,
    isAuth: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case 'LOGOUT': 
            return {
                ...state,
                user: null,
                isAuth: false
            }
        default:
           return state
    }
}

export default user
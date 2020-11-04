const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':
            console.log('login successful');
            return {
                ...state, authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state, authError: action.err
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out')
            return state
        default:
            return state
    }
}

export default authReducer;

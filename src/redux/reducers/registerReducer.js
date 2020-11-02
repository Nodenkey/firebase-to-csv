const initialState = {}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            console.log('registered user', action.details);
            return state;
        case 'REGISTER_USER_ERR':
            console.log('register user failed', action.err);
            return state;
        default:
            return state
    }
}

export default registerReducer;

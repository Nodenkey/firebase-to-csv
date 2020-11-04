const initialState = {
    registrationError: null,
    registrationSuccess: null,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            console.log('registered user');
            return {...state, registrationError: null, registrationSuccess: 'successful registration'};
        case 'REGISTER_USER_ERR':
            console.log('register user failed', action.err);
            return {...state, registrationError: 'Something went wrong, Please try again', registrationSuccess: null};
        default:
            return state
    }
}

export default registerReducer;

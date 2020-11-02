import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import {combineReducers} from 'redux';
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    // syncs to database online
    firebase: firestoreReducer,
})

export default rootReducer

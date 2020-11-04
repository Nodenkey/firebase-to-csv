import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import {combineReducers} from 'redux';
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    // syncs to database online
    firestore: firestoreReducer,
    //syncs to firebase
    firebase: firebaseReducer

})

export default rootReducer

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance ,reduxFirestore, getFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import firebase from 'firebase/app'
import fbConfig from "./config/fbConfig";


// use withExtraArgument on thunk to tag the getFirebase and getFirestore to the thunk in the redux actions
const store = createStore(rootReducer,
    // use compose to combine all the store enhancers(middleware)
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        // add the config file to the reduxFirestore and the reduxFirebase to connect them
        reduxFirestore(fbConfig)
    )
)

const rrfConfig = {
    userProfile: 'users',
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Router>
                    <App/>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

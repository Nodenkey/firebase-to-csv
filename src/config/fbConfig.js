import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrIENX0jRdycxHjvQpnki1smHwt-upxzw",
    authDomain: "fir-to-csv.firebaseapp.com",
    databaseURL: "https://fir-to-csv.firebaseio.com",
    projectId: "fir-to-csv",
    storageBucket: "fir-to-csv.appspot.com",
    messagingSenderId: "38569744959",
    appId: "1:38569744959:web:b4ec4f18a07e51c8abb68a",
    measurementId: "G-N4CCJC5GQB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;

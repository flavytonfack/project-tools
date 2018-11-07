import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxwPDDlbLfhCAMMkcLuKrMLFNEzmklih0",
    authDomain: "project-tools-dfbe7.firebaseapp.com",
    databaseURL: "https://project-tools-dfbe7.firebaseio.com",
    projectId: "project-tools-dfbe7",
    storageBucket: "project-tools-dfbe7.appspot.com",
    messagingSenderId: "764932023805"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
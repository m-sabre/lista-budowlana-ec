// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref} from 'firebase/database'
import {getAnalytics} from "firebase/analytics";
// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUw35rlR6NWVCZW4F9fUZgV2K5T7vZCMc",
    authDomain: "checklista-budowlana.firebaseapp.com",
    databaseURL: "https://checklista-budowlana-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "checklista-budowlana",
    storageBucket: "checklista-budowlana.appspot.com",
    messagingSenderId: "114082480269",
    appId: "1:114082480269:web:df0b87bf046f6a0d80e2c4",
    measurementId: "G-P2KKXRHMF6"
};



const app =initializeApp(firebaseConfig);

const projectDatabase = getDatabase(app)

export  { projectDatabase, firebaseConfig }
import {
    firebase
} from "@firebase/app";
import "@firebase/firestore";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5oZTOO9xZSWRykWqPjLKR0Gb1De2tTno",
    authDomain: "tex-smart-lending.firebaseapp.com",
    databaseURL: "https://tex-smart-lending.firebaseio.com",
    projectId: "tex-smart-lending",
    storageBucket: "tex-smart-lending.appspot.com",
    messagingSenderId: "31256574215"
});

export const db = firebaseApp.firestore();
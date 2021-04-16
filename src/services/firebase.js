import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
apiKey: "AIzaSyDCiflgdsuOjbZP9I0gcLVcFRDMu9tdiSM",
authDomain: "sicschat.firebaseapp.com",
projectId: "sicschat",
storageBucket: "sicschat.appspot.com",
messagingSenderId: "438001630720",
appId: "1:438001630720:web:764dd1b787861f507ca2e5",
measurementId: "G-J00S4GN8EZ",   
databaseURL:"https://sicschat-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

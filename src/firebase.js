import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAxl11eitDid9qUOGSHqbyVw6nOUZCPn_g",
    authDomain: "wechat-a20b2.firebaseapp.com",
    projectId: "wechat-a20b2",
    storageBucket: "wechat-a20b2.appspot.com",
    messagingSenderId: "132396712639",
    appId: "1:132396712639:web:e4a4c8462182af63f6bc0a"
}).auth();
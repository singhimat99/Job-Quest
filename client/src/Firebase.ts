// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDug1AGlbFcbwL6NMVjkKC-ts-PthPGJkM",
    authDomain: "jobquest-e6360.firebaseapp.com",
    projectId: "jobquest-e6360",
    storageBucket: "jobquest-e6360.appspot.com",
    messagingSenderId: "504615301606",
    appId: "1:504615301606:web:92697d2e108a0929d26627",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

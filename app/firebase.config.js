// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPK2KKSNNCOUCNSJ_b9H2g6D4xYrncEEc",
    authDomain: "eco-force.firebaseapp.com",
    projectId: "eco-force",
    storageBucket: "eco-force.firebasestorage.app",
    messagingSenderId: "111608737222",
    appId: "1:111608737222:web:c96e8dac4f2a99cd6e56c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
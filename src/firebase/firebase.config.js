// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBygGHjwJJvOqg04EsdA_MAsqGUubVlbWI",
    authDomain: "learning-platform-8f0e4.firebaseapp.com",
    projectId: "learning-platform-8f0e4",
    storageBucket: "learning-platform-8f0e4.appspot.com",
    messagingSenderId: "229957923587",
    appId: "1:229957923587:web:d581e29c90b622e55f6f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
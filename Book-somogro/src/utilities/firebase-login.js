// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwPqzvchAmocIkNV7mvgv212GGCP8W5mE",
  authDomain: "react-firebase-63be7.firebaseapp.com",
  projectId: "react-firebase-63be7",
  storageBucket: "react-firebase-63be7.firebasestorage.app",
  messagingSenderId: "276647392153",
  appId: "1:276647392153:web:a09d7b552d5bab09f59908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
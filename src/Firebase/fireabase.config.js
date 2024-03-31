// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7t6KTwzoX00nNNLxewrXd3s9X2lJ6RY",
  authDomain: "authentication-email-pas-67b40.firebaseapp.com",
  projectId: "authentication-email-pas-67b40",
  storageBucket: "authentication-email-pas-67b40.appspot.com",
  messagingSenderId: "868528300465",
  appId: "1:868528300465:web:fb362fd489f59201e35d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth
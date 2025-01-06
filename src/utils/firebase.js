// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzlDhDo81ZzxZHqlG6msRzFgKXtCXluYw",
  authDomain: "netflixgpt-77ba1.firebaseapp.com",
  projectId: "netflixgpt-77ba1",
  storageBucket: "netflixgpt-77ba1.firebasestorage.app",
  messagingSenderId: "894913330915",
  appId: "1:894913330915:web:d81c3497f16eac5a008fd6",
  measurementId: "G-E541L0Y0RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdzJSat_zFR7tjWFcln6wP1ggXPx4rCzo",
  authDomain: "host-6833d.firebaseapp.com",
  projectId: "host-6833d",
  storageBucket: "host-6833d.appspot.com",
  messagingSenderId: "818046785452",
  appId: "1:818046785452:web:8f2805fd253f8a4f1ecc09",
  measurementId: "G-RTQ1SNQX6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
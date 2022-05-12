// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2nH9cXPZf-hS40HKXG3j59RlONgNtmCU",
  authDomain: "doctors-portals-sever.firebaseapp.com",
  projectId: "doctors-portals-sever",
  storageBucket: "doctors-portals-sever.appspot.com",
  messagingSenderId: "463415790685",
  appId: "1:463415790685:web:6505352ef7c9ba0bae91b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

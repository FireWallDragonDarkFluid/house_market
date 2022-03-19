// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6X10snqFtpnlSTFUjak7dQVFrh66g5vU",
  authDomain: "house-marketplace-app-7520f.firebaseapp.com",
  projectId: "house-marketplace-app-7520f",
  storageBucket: "house-marketplace-app-7520f.appspot.com",
  messagingSenderId: "2373069340",
  appId: "1:2373069340:web:724ca90a7740d3c5360dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjsblogfromlamadev.firebaseapp.com",
  projectId: "nextjsblogfromlamadev",
  storageBucket: "nextjsblogfromlamadev.appspot.com",
  messagingSenderId: "976603286613",
  appId: "1:976603286613:web:9956556de75168373698dc",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

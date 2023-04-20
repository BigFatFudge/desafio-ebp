// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVpXoady5sHysl30kQQ8Ty9PTmrgb27vY",
  authDomain: "desafioapp-70595.firebaseapp.com",
  projectId: "desafioapp-70595",
  storageBucket: "desafioapp-70595.appspot.com",
  messagingSenderId: "1091015009749",
  appId: "1:1091015009749:web:1b095cbf0ef9e01aca895c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
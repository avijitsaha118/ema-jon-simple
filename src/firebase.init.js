// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLoWlifnhhgMFnAh9DMua75ltJtxH7ao",
  authDomain: "ema-jon-simple-b3260.firebaseapp.com",
  projectId: "ema-jon-simple-b3260",
  storageBucket: "ema-jon-simple-b3260.appspot.com",
  messagingSenderId: "569271058892",
  appId: "1:569271058892:web:3cc9cca0292bf978809d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
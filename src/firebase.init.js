// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCc04zXety2AytXUhrJka28Tz88QIzx0Hc",
  authDomain: "ema-john-simple-module-48.firebaseapp.com",
  projectId: "ema-john-simple-module-48",
  storageBucket: "ema-john-simple-module-48.appspot.com",
  messagingSenderId: "1059661539418",
  appId: "1:1059661539418:web:f19b747e6039ef874b9063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
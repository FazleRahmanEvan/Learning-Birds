// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-oZZQoHI9YO2ZKljkpiOf-NV8vMke88",
  authDomain: "learning-services-49040.firebaseapp.com",
  projectId: "learning-services-49040",
  storageBucket: "learning-services-49040.appspot.com",
  messagingSenderId: "338239595939",
  appId: "1:338239595939:web:a2ca517bc215fcaa582616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


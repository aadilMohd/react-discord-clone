// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import{ getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbNXYFQDl14TGHNdoj_S_E5karoz7tVCg",
  authDomain: "discord-clone-4bc1c.firebaseapp.com",
  projectId: "discord-clone-4bc1c",
  storageBucket: "discord-clone-4bc1c.appspot.com",
  messagingSenderId: "83425586675",
  appId: "1:83425586675:web:5a05f8b35f94269c1b7686",
  measurementId: "G-Q8MMD7ME2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();


export {auth,provider,db};


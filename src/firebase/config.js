// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMc0sV2Kfv2MTIWW9actIh9sHrzh4QIJ4",
  authDomain: "miniblog-c769e.firebaseapp.com",
  projectId: "miniblog-c769e",
  storageBucket: "miniblog-c769e.appspot.com",
  messagingSenderId: "791364089340",
  appId: "1:791364089340:web:f0666999bd7c7605c0ee79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
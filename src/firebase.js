// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfPkOkt8bFvWoz5lqx1jTLsAKSYc41hcc",
  authDomain: "linkedin-clone-yt-8e545.firebaseapp.com",
  projectId: "linkedin-clone-yt-8e545",
  storageBucket: "linkedin-clone-yt-8e545.appspot.com",
  messagingSenderId: "395804176949",
  appId: "1:395804176949:web:24156adaa497227667f77c",
  measurementId: "G-N4C4FW5MN9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAjVMSNPiR6GRWGKwbdqjBhF-J08op99Q",
  authDomain: "twitter-clone-17561.firebaseapp.com",
  projectId: "twitter-clone-17561",
  storageBucket: "twitter-clone-17561.appspot.com",
  messagingSenderId: "529622696032",
  appId: "1:529622696032:web:5bea792f8c0010c4250305",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

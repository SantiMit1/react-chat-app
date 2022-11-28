import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-5ImO64Hg_qaYG6oj10MvbRDgu58MBdQ",
  authDomain: "chat-app-6f452.firebaseapp.com",
  projectId: "chat-app-6f452",
  storageBucket: "chat-app-6f452.appspot.com",
  messagingSenderId: "488683405961",
  appId: "1:488683405961:web:2a0c4ff04387e2f7a5fc58"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
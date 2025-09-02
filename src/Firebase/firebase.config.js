import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZn_WQkAUVBSsL3tzyEt04ejFKO4NSvU",
  authDomain: "automatedvisa.firebaseapp.com",
  projectId: "automatedvisa",
  storageBucket: "automatedvisa.firebasestorage.app",
  messagingSenderId: "65905917260",
  appId: "1:65905917260:web:238a7ee12a5da91ac123e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
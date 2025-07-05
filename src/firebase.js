// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcr2phTCJKrSpDruELaIgPsJb-MSBg72w",
  authDomain: "lowcosti.firebaseapp.com",
  projectId: "lowcosti",
  storageBucket: "lowcosti.appspot.com",
  messagingSenderId: "563746888768",
  appId: "1:563746888768:web:d8eb482ea8ebc2b10253a5",
  measurementId: "G-RLF6BHB7F8"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Auth Firebase
export const auth = getAuth(app);

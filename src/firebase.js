// Import SDK Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔑 Configuration Firebase (remplace par tes clés)
const firebaseConfig = {
  apiKey: "AIzaSyC9bXXXXXX",          // 👉 Ta clé API
  authDomain: "lowcosti.firebaseapp.com",
  projectId: "lowcosti",
  storageBucket: "lowcosti.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
  measurementId: "G-XXXXXXX",
};

// Initialisation de l'application Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

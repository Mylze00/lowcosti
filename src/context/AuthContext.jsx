// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Sauvegarde dans Firestore
  const saveUserToFirestore = async (userData) => {
    if (!userData?.uid) return;

    const userRef = doc(db, "users", userData.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: userData.uid,
        email: userData.email || null,
        displayName: userData.displayName || null,
        photoURL: userData.photoURL || null,
        phoneNumber: userData.phoneNumber || null,
        createdAt: new Date(),
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await saveUserToFirestore(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  const loginWithFacebook = () => signInWithPopup(auth, facebookProvider);
  const logout = () => signOut(auth);

  const loginWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const registerWithEmail = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await saveUserToFirestore(result.user); // ✅ Enregistre
    return result;
  };

  const loginWithPhone = async (phoneNumber, appVerifier) =>
    signInWithPhoneNumber(auth, phoneNumber, appVerifier);

  const setUpRecaptcha = (containerId) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: "invisible",
      callback: (response) => {
        console.log("reCAPTCHA résolu");
      },
    });
    return window.recaptchaVerifier;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        loginWithFacebook,
        loginWithEmail,
        registerWithEmail,
        loginWithPhone,
        logout,
        setUpRecaptcha,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveUserToFirestore = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const existing = await getDoc(userRef);

  if (!existing.exists()) {
    const userData = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || null,
      phoneNumber: user.phoneNumber || null,
      photoURL: user.photoURL || null,
      providerId: user.providerData[0]?.providerId || null,
      createdAt: new Date().toISOString(),
    };

    await setDoc(userRef, userData);
    console.log("✅ Utilisateur enregistré dans Firestore !");
  }
};

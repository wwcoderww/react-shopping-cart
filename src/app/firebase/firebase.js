// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ... other values from Firebase console
};

function logOut() {
  signOut(auth);
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, logOut };

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_PROJECT_ID,
  // ... other values from Firebase console
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

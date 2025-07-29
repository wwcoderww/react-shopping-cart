// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ... other values from Firebase console
};

async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Success");
  } catch (error) {
    console.log(error);
  }
}

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      alert("Sucess");
    })
    .catch((error) => {
      console.log(error);
    });
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, login, createUser };

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";

export default async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Success");
  } catch (error) {
    console.log(error);
  }
}

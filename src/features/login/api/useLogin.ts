import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";

type LoginType = {
  email: string; password: string
}


export default async function login({email, password}: LoginType) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Success");
  } catch (error) {
    console.log(error);
  }
}

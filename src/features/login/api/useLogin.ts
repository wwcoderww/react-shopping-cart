import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";
import type { ErrorNewUserType } from "../../../types/ErrorType";

export default async function login(
  email: string,
  password: string
): Promise<ErrorNewUserType | void> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Success");
  } catch (error) {
    alert(error);
  }
}

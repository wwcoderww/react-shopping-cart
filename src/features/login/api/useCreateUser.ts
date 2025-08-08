import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";
import type { ErrorNewUserType } from "../../../types/ErrorType";

export default async function createUser(
  email: string,
  password: string
): Promise<ErrorNewUserType | void> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // Sucess: created new account
  } catch (error: any) {
    const errorMsg = error.message;
    console.log(error.message);
    // Email taken
    if (errorMsg === "Firebase: Error (auth/email-already-in-use).")
      return ["email", { type: "api", message: "Email not available" }];
    // Unknown Error
    if (!errorMsg) {
      alert(`Check console for more details\n${error.message}`);
      console.log(error);
    }
  }
}

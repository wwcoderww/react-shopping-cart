import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";
import type { ErrorNewUserType } from "../../../types/ErrorType";

export default async function login(
  email: string,
  password: string
): Promise<ErrorNewUserType | void> {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log(`sucess`))
    .catch((error) => {
      const errorMsg = error.message;
      // Unknown Email
      if (errorMsg === "Firebase: Error (auth/user-not-found).")
        return ["email", { type: "api", message: "Email not found" }];
      // Wrong Password
      if (errorMsg === "Firebase: Error (auth/wrong-password).")
        return ["password", { type: "api", message: "Incorrect password" }];
      // Unknown Error
      alert(`Check console for more details\n${error.message}`);
    });
}

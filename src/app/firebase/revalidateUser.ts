import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  type User,
} from "firebase/auth";
import type { APIErrorType } from "../../types/ErrorType";

export default async function reValidateUser(
  user: User
): Promise<APIErrorType | void> {
  // Get User Input
  const userProvidedPassword = prompt("Current Password");
  // Guard Clause: User provided no input
  if (typeof userProvidedPassword !== "string")
    return { error: { message: "Incorrect Current Password" } };
  false;
  // Guard Clause: User has no email
  if (typeof user.email !== "string")
    return { error: { message: "No current email set" } };
  // If all good
  const credential = EmailAuthProvider.credential(
    user.email,
    userProvidedPassword
  );
  try {
    await reauthenticateWithCredential(user, credential);
    // Sucess
  } catch (error: any) {
    // const errorCode = error.code;
    // Known Errors
    // Unknown Error
    return { error };
  }
}

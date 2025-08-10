import { updateEmail, type User } from "firebase/auth";
import type { FieldValues } from "react-hook-form";
import reValidateUser from "../../../app/firebase/revalidateUser";
import type { APIErrorType } from "../../../types/ErrorType";
// Make into reusuable by (valueName, validate?, verifyValue?, Error Messages, firebase function)
// Move file to firebase folder and call it '?firebase functions?`
export default async function useChangeEmail(
  user: User,
  values: FieldValues
): Promise<APIErrorType | void> {
  // Variables
  const { email, verifyEmail } = values;
  // Re-Authorize User. REQUIRED
  const ErrorValidateUser = await reValidateUser(user);
  if (ErrorValidateUser) {
    return ErrorValidateUser;
  }
  // If Passwords Do Not Match
  if (email !== verifyEmail)
    return {
      error: { message: "Emails do not match" },
      setError: ["verifyEmail", { type: "user", message: "Emails must match" }],
    };
  // Fire updatePassword Error Function
  try {
    await updateEmail(user, email);
    // No Errors
  } catch (error: any) {
    // const errorCode = error.code;
    // Known Errors
    // if (errorCode === "auth/requires-recent-login")
    // Unknown Error
    return { error };
  }
}

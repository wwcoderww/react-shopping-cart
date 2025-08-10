import { updatePassword, type User } from "firebase/auth";
import type { FieldValues } from "react-hook-form";
import type { APIErrorType } from "../../../types/ErrorType";
import reValidateUser from "../../../app/firebase/revalidateUser";

export default async function useChangePassword(
  user: User,
  values: FieldValues
): Promise<APIErrorType | void> {
  // Variables
  const { password, verifyPassword } = values;
  // Re-Authorize User. REQUIRED
  const ErrorValidateUser = await reValidateUser(user);
  if (ErrorValidateUser) {
    return ErrorValidateUser;
  }
  // If Passwords Do Not Match
  if (password !== verifyPassword)
    return {
      error: { message: "Passwords do not match" },
      setError: [
        "verifyPassword",
        { type: "user", message: "Passwords must match" },
      ],
    };
  // Fire updatePassword Error Function
  try {
    await updatePassword(user, password);
    // No Errors
  } catch (error: any) {
    // const errorCode = error.code;
    // Known Errors
    // if (errorCode === "auth/requires-recent-login")
    // Unknown Error
    return { error };
  }
}

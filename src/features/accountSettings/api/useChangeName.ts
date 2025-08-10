import { updateProfile, type User } from "firebase/auth";
import type { APIErrorType } from "../../../types/ErrorType";
import type { FieldValues } from "react-hook-form";

export default async function useChangeName(
  user: User,
  values: FieldValues
): Promise<APIErrorType | void> {
  const { displayName } = values;
  try {
    await updateProfile(user, {
      displayName,
    });
    // No Errors
  } catch (error) {
    // Known Errors

    // Unknown Error
    return { error };
  }
}

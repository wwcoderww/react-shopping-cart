import { getAuth, updateProfile } from "firebase/auth";

export default async function useChangeName(newName: string) {
  const auth = getAuth();
  const user = auth.currentUser;
// Check if user exist
  if (!user) return;
  try {
    await updateProfile(user, {
      displayName: newName,
    });
    // Sucess
    alert("sucess");
  } catch (error) {
    // Failed
    console.log(error);
  }
}

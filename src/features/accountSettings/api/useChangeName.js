import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

export default async function useChangeName(newName) {
  try {
    await updateProfile(auth.currentUser, {
      displayName: newName,
    });
    alert("sucess");
  } catch (error) {
    console.log(error);
  }
}

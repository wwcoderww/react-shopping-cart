import { getAuth, updateEmail } from "firebase/auth";
const auth = getAuth();

export default async function useChangeEmail(newEmail, confirmEmail) {
  console.log(newEmail, confirmEmail);
  if (newEmail !== confirmEmail) return;
  try {
    await updateEmail(auth.currentUser, newEmail);
    alert("sucess");
  } catch (error) {
    alert(error);
    console.log(error);
  }
}

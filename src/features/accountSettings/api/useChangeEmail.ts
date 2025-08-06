import { getAuth, updateEmail } from "firebase/auth";

type UseChangeEmailType = {
  newEmail: string;
  confirmEmail: string;
};

export default async function useChangeEmail({
  newEmail,
  confirmEmail,
}: UseChangeEmailType) {
  const auth = getAuth();
  const user = auth.currentUser;
  // Check if emails match
  if (newEmail !== confirmEmail) return;
  // Checks if user is logged in
  if (!user) return;
  try {
    await updateEmail(user, newEmail);
    // Success
    alert("sucess");
  } catch (error) {
    // Failed
    alert(error);
    console.log(error);
  }
}

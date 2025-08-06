import { getAuth, updatePassword } from "firebase/auth";

export default function (newPassword: string) {
  const auth = getAuth();
  const user = auth.currentUser;
  // Check if user is logged in
  if (!user) return;
  updatePassword(user, newPassword)
    .then(() => {
      // Sucess
      alert("sucess");
    })
    .catch((error) => {
      // Failed
      console.log(user);
      alert(error.message);
    });
}

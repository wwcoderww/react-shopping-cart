import { getAuth, updatePassword } from "firebase/auth";

const auth = getAuth();

const user = auth.currentUser;

export default function (newPassword) {
  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
      alert("sucess");
    })
    .catch((error) => {
      // An error ocurred
      // ...
      console.log(user);
      alert(error.message);
    });
}

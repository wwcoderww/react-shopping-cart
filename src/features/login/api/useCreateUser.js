import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";

export default async function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      alert("Sucess");
    })
    .catch((error) => {
      alert(error);
    });
}

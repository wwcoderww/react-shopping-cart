import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/firebase/firebase";

type CreateUserType = {
  email: string;
  password: string;
  verifyPassword: string;
};

export default async function createUser({
  email,
  password,
  verifyPassword,
}: CreateUserType) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      alert("Sucess");
    })
    .catch((error) => {
      alert(error);
    });
}

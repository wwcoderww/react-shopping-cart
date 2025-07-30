import React from "react";
import { logOut } from "../../../app/firebase/firebase";
export function SignOutBtn() {
  return <button onClick={logOut}>Sign Out, Red button</button>;
}

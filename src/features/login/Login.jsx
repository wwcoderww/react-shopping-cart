import { useForm } from "react-hook-form";
import { LoginButton } from "./components/LoginButton";
import { LoginLinks } from "./components/LoginLinks";
import { UserInput } from "./components/UserInput";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/firebase/firebase";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  const { register, getValues, handleSubmit } = useForm();

  async function submitForm(e) {
    // e.preventDefault()
    try {
      await signInWithEmailAndPassword(
        auth,
        getValues().dataName,
        getValues().password
      );
      alert("Success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-full flex">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col mx-auto my-auto items-center"
      >
        <div className="p-6 flex flex-col gap-6">
          <UserInput
            dataName="username"
            labelName="Username"
            inputType="text"
            {...register("dataName")}
          />
          <UserInput
            dataName="password"
            labelName="Password"
            inputType="password"
            {...register("password")}
          />
        </div>
        <LoginButton newUser={newUser} />
        <LoginLinks newUser={newUser} setNewUser={setNewUser} />
      </form>
    </div>
  );
}

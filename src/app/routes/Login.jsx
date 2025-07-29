import { useForm } from "react-hook-form";
import { LoginButton } from "./../../features/login/LoginButton";
import { LoginLinks } from "./../../features/login/LoginLinks";
import { UserInput } from "./../../features/login/UserInput";
import React, { useState } from "react";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  const { register, getValues, handleSubmit } = useForm();

  function submitForm(e) {
    // e.preventDefault()
    console.log(getValues());
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

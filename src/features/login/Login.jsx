import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginButton } from "./components/LoginButton";
import { LoginLinks } from "./components/LoginLinks";
import { UserInput } from "./components/UserInput";
import apiLogin from "./api/useLogin";
import apiCreateUser from "./api/useCreateUser";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  const { register, getValues, handleSubmit } = useForm();

  async function submitForm() {
    const { email, password } = getValues();
    if (newUser) {
      console.log(email, password);
      apiCreateUser(email, password);
    } else {
      await apiLogin(email, password);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col mx-auto my-auto items-center border-4 p-12 rounded-md bg-blue-600 text-white"
    >
      <div className="text-5xl font-[700] p-3">Welcome</div>
      <div className="p-6 flex flex-col gap-6">
        <UserInput
          dataName="email"
          labelName="Email"
          inputType="text"
          {...register("email")}
        />
        <UserInput
          dataName="password"
          labelName="Password"
          inputType="password"
          {...register("password")}
        />
        {newUser && (
          <UserInput
            dataName="verifyPassword"
            labelName="Verify Password"
            inputType="password"
            {...register("verifyPassword")}
          />
        )}
      </div>
      <LoginButton newUser={newUser} />
      <LoginLinks newUser={newUser} setNewUser={setNewUser} />
    </form>
  );
}

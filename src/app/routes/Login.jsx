import { LoginButton } from "./../../features/login/LoginButton";
import { LoginLinks } from "./../../features/login/LoginLinks";
import { UserInput } from "./../../features/login/UserInput";
import React, { useState } from "react";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col mx-auto my-auto items-center">
        <div className="p-6 flex flex-col gap-6">
          <UserInput
            dataName="username"
            labelName="Username"
            inputType="text"
          />
          <UserInput
            dataName="password"
            labelName="Password"
            inputType="password"
          />
        </div>
        <LoginButton newUser={newUser} />
        <LoginLinks newUser={newUser} setNewUser={setNewUser} />
      </div>
    </div>
  );
}

import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Welcome() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const message = currentUser
    ? `WELCOME, ${currentUser.displayName || currentUser.email}`
    : "WELCOME";

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-[7rem] font-bold  text-white">{message}</div>
    </div>
  );
}

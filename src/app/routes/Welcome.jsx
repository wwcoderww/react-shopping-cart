import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Welcome() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-[14rem] font-bold  text-white">WELCOME</div>
    </div>
  );
}

import React from "react";
export function LoginButton({ newUser }) {
  const text = newUser ? "Create" : "Login";
  return (
    <div className="h-[1.5lh] mt-3 mb-6">
      <button className="border-2 px-4 rounded-lg text-3xl bg-gray-200 hover:text-4xl hover:cursor-pointer">
        {text}
      </button>
    </div>
  );
}

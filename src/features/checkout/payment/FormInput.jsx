import React from "react";
export function FormInput({ data, label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={data}>{label}</label>
      <input type="text" className="bg-white" />
    </div>
  );
}

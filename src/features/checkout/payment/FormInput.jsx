import React from "react";
export function FormInput({ data, label, ...register }) {
  return (
    <div className="flex flex-col text-xl">
      <label htmlFor={data}>{label}</label>
      <input type="text" className="bg-white w-full rounded-sm" {...register} />
    </div>
  );
}

import React from "react";
export function UserInput({ dataName, labelName, inputType, ...register }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={dataName} className="text-2xl">
        {labelName}
      </label>
      <input
        type={inputType}
        className="bg-white text-xl px-1 py-[.1rem]"
        {...register}
      />
    </div>
  );
}

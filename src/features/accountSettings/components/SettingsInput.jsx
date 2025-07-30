import React from "react";

export default function SettingsInput({ inputType, ...register }) {
  return <input type={inputType} {...register} className="bg-white" />;
}

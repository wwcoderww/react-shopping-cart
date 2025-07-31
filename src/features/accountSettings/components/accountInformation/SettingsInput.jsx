import React from "react";
import { useAuth } from "../../../../contexts/AuthContext";

export default function SettingsInput({
  inputType,
  defaultValue,
  ...register
}) {
  const { currentUser } = useAuth();

  return (
    <input
      type={inputType}
      {...register}
      className="bg-white outline-0 rounded-md px-1"
      defaultValue={currentUser?.[defaultValue]}
      required
    />
  );
}

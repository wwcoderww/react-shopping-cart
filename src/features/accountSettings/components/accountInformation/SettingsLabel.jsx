import React from "react";
export default function SettingsLabel({ dataName, message }) {
  return (
    <div className="flex-1 font-[500] text-3xl">
      <label htmlFor={dataName}>{message}</label>
    </div>
  );
}

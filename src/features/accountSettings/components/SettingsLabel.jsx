import React from "react";
export default function SettingsLabel({ dataName, message }) {
  return (
    <div className="flex-1 font-[500]">
      <label htmlFor={dataName}>{message}</label>
    </div>
  );
}

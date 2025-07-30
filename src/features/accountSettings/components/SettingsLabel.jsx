import React from "react";
export default function SettingsLabel({ dataName, message }) {
  return (
    <div className="flex-1">
      <label htmlFor={dataName}>{message}</label>
    </div>
  );
}

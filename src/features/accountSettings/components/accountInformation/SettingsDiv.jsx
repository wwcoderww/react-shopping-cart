import React from "react";
import SettingsBtnSet from "./SettingsBtnSet";

export default function SettingsDiv({ children, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-2.5 text-xl">
      {children}
      <SettingsBtnSet />
    </form>
  );
}

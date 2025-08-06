import React from "react";
import SettingsBtnSet from "./SettingsBtnSet";

type SettingsDivType = {
  children: React.ReactNode;
  handleSubmit?(): void;
};

export default function SettingsDiv({
  children,
  handleSubmit,
}: SettingsDivType) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-2.5 text-xl">
      {children}
      <SettingsBtnSet />
    </form>
  );
}

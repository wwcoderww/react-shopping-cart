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
    <form
      onSubmit={handleSubmit}
      className="xl:gap-4 p-2.5 text-xl flex flex-col xl:flex-row pb-8 xl:pb-0 border-b-2 border-dashed xl:border-0"
    >
      {children}
      <SettingsBtnSet />
    </form>
  );
}

import React from "react";
import SettingsNavLink from "./SettingsNavLink";

export default function SettingsNav({ setOpenTab, openTab }) {
  return (
    <div className="flex flex-col text-2xl border-r-1">
      <SettingsNavLink
        setOpenTab={setOpenTab}
        openTab={openTab}
        tabName={"info"}
        label="Account Information"
      />
      <SettingsNavLink
        setOpenTab={setOpenTab}
        openTab={openTab}
        tabName={"signout"}
        label="Sign Out"
      />
    </div>
  );
}

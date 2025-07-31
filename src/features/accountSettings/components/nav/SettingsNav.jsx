import React from "react";
import SettingsNavLink from "./SettingsNavLink";

export default function SettingsNav({ setOpenTab }) {
  return (
    <div className="flex flex-col text-2xl gap-4 p-4 ">
      <SettingsNavLink
        setOpenTab={setOpenTab}
        tabName={"info"}
        label="Account Information"
      />
      <SettingsNavLink
        setOpenTab={setOpenTab}
        tabName={"signout"}
        label="Sign Out"
      />
    </div>
  );
}

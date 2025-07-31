import React from "react";

export default function SettingsNavLink({ setOpenTab, tabName, label }) {
  return (
    <div onClick={() => setOpenTab(tabName)} className="hover:cursor-pointer">
      {label}
    </div>
  );
}

import React from "react";

export default function SettingsNavLink({
  setOpenTab,
  tabName,
  label,
  openTab,
}) {
  const isActive = tabName === openTab;
  const activeTabStyle = isActive && `bg-gray-300`;
  const style = `hover:cursor-pointer border-b-2 p-4 ${activeTabStyle}`;
  return (
    <div onClick={() => setOpenTab(tabName)} className={style}>
      {label}
    </div>
  );
}

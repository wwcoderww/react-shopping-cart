import React, { useState } from "react";
import AccountInformation from "./components/AccountInformation";
import AccountSignOut from "./components/AccountSignOut";
import SettingsNav from "./components/nav/SettingsNav";
//Testing Below
import { useAuth } from "../../contexts/AuthContext";
//Testing Above

export default function AccountSettings() {
  const [openTab, setOpenTab] = useState("none");
  //Testing Below
  const { currentUser } = useAuth();
  console.log(currentUser);
  //Testing Above

  return (
    <div className="flex w-full h-full">
      <SettingsNav setOpenTab={setOpenTab} />
      {openTab === "info" && <AccountInformation />}
      {openTab === "signout" && <AccountSignOut />}
    </div>
  );
}

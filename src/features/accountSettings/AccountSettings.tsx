import { useState } from "react";
import AccountInformation from "./components/AccountInformation";
import AccountSignOut from "./components/AccountSignOut";
import SettingsNav from "./components/nav/SettingsNav";
//Testing Below
import { useAuth } from "../../contexts/AuthContext";
//Testing Above

export default function AccountSettings() {
  const [openTab, setOpenTab] = useState<string>("none");
  //Testing Below
  const { currentUser } = useAuth();
  console.log(currentUser);
  // Set up useContext
  //Testing Above

  return (
    <div className="flex flex-col w-full h-full sm:flex-row">
      <SettingsNav setOpenTab={setOpenTab} openTab={openTab} />
      {openTab === "info" && <AccountInformation />}
      {openTab === "signout" && <AccountSignOut />}
    </div>
  );
}

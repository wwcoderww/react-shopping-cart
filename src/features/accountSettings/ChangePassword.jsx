import React from "react";
import SettingsLabel from "./components/accountInformation/SettingsLabel";
import SettingsInput from "./components/accountInformation/SettingsInput";
import SettingsDiv from "./components/accountInformation/SettingsDiv";

export default function ChangePassword() {
  return (
    <SettingsDiv>
      <SettingsLabel dataName="password" message="Password" />
      <SettingsInput inputType="password" />
      <label htmlFor="confirmPassword">Confirm</label>
      <SettingsInput inputType="confirmPassword" />
    </SettingsDiv>
  );
}

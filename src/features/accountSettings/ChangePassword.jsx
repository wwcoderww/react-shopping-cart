import React from "react";
import SettingsBtnSet from "./components/SettingsBtnSet";
import SettingsLabel from "./components/SettingsLabel";
import SettingsInput from "./components/SettingsInput";
import SettingsDiv from "./components/SettingsDiv";

export default function ChangePassword() {
  return (
    <SettingsDiv>
      <SettingsLabel dataName="password" message="Password" />
      <SettingsInput inputType="password" />
      <SettingsBtnSet />
    </SettingsDiv>
  );
}

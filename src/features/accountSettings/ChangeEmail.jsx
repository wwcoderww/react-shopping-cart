import React from "react";
import SettingsBtnSet from "./components/SettingsBtnSet";
import SettingsLabel from "./components/SettingsLabel";
import SettingsInput from "./components/SettingsInput";
import SettingsDiv from "./components/SettingsDiv";

export default function ChangeEmail() {
  return (
    <SettingsDiv>
      <SettingsLabel dataName="email" message="Email" />
      <SettingsInput inputType="email" />
      <SettingsInput inputType="email" />
      <SettingsBtnSet />
    </SettingsDiv>
  );
}

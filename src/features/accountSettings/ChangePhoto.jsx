import React from "react";
import SettingsBtnSet from "./components/SettingsBtnSet";
import SettingsInput from "./components/SettingsInput";
import SettingsLabel from "./components/SettingsLabel";
import SettingsDiv from "./components/SettingsDiv";

export default function ChangePhoto({ setPhotoType }) {
  return (
    <SettingsDiv>
      <SettingsLabel dataName="photoURL" message="Profile Picture" />
      <select
        name="photoType"
        id="photoType"
        onChange={(e) => setPhotoType(e.target.value)}
      >
        <option value="upload" defaultChecked>
          upload
        </option>
        <option value="url">url</option>
      </select>
      <SettingsInput inputType="text" />
      <SettingsBtnSet />
    </SettingsDiv>
  );
}

import React from "react";
import SettingsDiv from "./components/accountInformation/SettingsDiv";
import SettingsInput from "./components/accountInformation/SettingsInput";
import SettingsLabel from "./components/accountInformation/SettingsLabel";

export default function ChangePhoto({ setPhotoType }) {
  return (
    <SettingsDiv>
      <SettingsLabel dataName="photoURL" message="Profile Picture" />
      <select
        name="photoType"
        id="photoType"
        onChange={(e) => setPhotoType(e.target.value)}
        className="text-center"
      >
        <option value="upload" defaultChecked>
          upload
        </option>
        <option value="url">url</option>
      </select>
      <SettingsInput inputType="text" />
    </SettingsDiv>
  );
}

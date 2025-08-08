import SettingsDiv from "../accountInformation/SettingsDiv";
import SettingsInput from "../accountInformation/SettingsInput";
import SettingsLabel from "../accountInformation/SettingsLabel";

type ChangePhotoType = {
  setPhotoType(value: string): void;
};

export default function ChangePhoto({ setPhotoType }: ChangePhotoType) {
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

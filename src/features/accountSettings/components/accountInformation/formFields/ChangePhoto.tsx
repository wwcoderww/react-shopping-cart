import SettingsDiv from "../components/SettingsDiv";
import SettingsInput from "../components/SettingsInput";
import SettingsLabel from "../components/SettingsLabel";

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

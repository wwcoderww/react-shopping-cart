import { validateDisplayName } from "../../../../utils/ValidateForm";
import useChangeName from "../../api/useChangeName";
import SettingsForm from "../accountInformation/SettingsForm";
import SettingsInput from "../accountInformation/SettingsInput";
import SettingsLabel from "../accountInformation/SettingsLabel";

export default function TempChangeName() {
  return (
    <SettingsForm validateFunction={useChangeName}>
      <SettingsLabel dataName="displayName" message="Display Name" />
      <SettingsInput
        inputType="text"
        dataName="displayName"
        placeholder={true}
        formOptions={validateDisplayName}
      />
    </SettingsForm>
  );
}

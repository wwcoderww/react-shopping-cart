import { validateDisplayName } from "../../../../utils/ValidateForm";
import useChangeName from "../../api/useChangeName";
import SettingsForm from "../accountInformation/SettingsForm";

export default function ChangeName() {
  return (
    <SettingsForm validateFunction={useChangeName}>
      <SettingsForm.Label dataName="displayName" message="Display Name" />
      <SettingsForm.Input
        inputType="text"
        dataName="displayName"
        placeholder={true}
        formOptions={validateDisplayName}
      />
    </SettingsForm>
  );
}

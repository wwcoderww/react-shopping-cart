import { validateEmail } from "../../../../../utils/ValidateForm";
import useChangeEmail from "../../../api/useChangeEmail";
import SettingsForm from "../SettingsForm";

export default function ChangeEmail() {
  return (
    <SettingsForm validateFunction={useChangeEmail}>
      <SettingsForm.Label dataName="email" message="New Email" />
      <SettingsForm.Input
        inputType="email"
        dataName="email"
        formOptions={validateEmail}
        placeholder={true}
      />
      <SettingsForm.Label
        dataName="verifyEmail"
        message="Verify"
        verify={true}
      />
      <SettingsForm.Input
        inputType="email"
        dataName="verifyEmail"
        formOptions={validateEmail}
      />
    </SettingsForm>
  );
}

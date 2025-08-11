import { validatePassword } from "../../../../../utils/ValidateForm";
import useChangePassword from "../../../api/useChangePassword";
import SettingsForm from "../SettingsForm";

export default function ChangePassword() {
  return (
    <SettingsForm validateFunction={useChangePassword}>
      <SettingsForm.Label dataName="password" message="Password" />
      <SettingsForm.Input
        inputType="password"
        dataName="password"
        formOptions={validatePassword}
      />
      <SettingsForm.Label
        dataName="verifyPassword"
        message="Verify"
        verify={true}
      />
      <SettingsForm.Input
        inputType="password"
        dataName="verifyPassword"
        formOptions={validatePassword}
      />
    </SettingsForm>
  );
}

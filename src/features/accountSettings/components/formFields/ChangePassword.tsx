import { validatePassword } from "../../../../utils/ValidateForm";
import useChangePassword from "../../api/useChangePassword";
import SettingsForm from "../accountInformation/SettingsForm";
import SettingsInput from "../accountInformation/SettingsInput";
import SettingsLabel from "../accountInformation/SettingsLabel";

export default function ChangePassword() {
  return (
    <SettingsForm validateFunction={useChangePassword}>
      <SettingsLabel dataName="password" message="Password" />
      <SettingsInput
        inputType="password"
        dataName="password"
        formOptions={validatePassword}
      />
      <SettingsLabel dataName="verifyPassword" message="Verify" />
      <SettingsInput
        inputType="password"
        dataName="verifyPassword"
        formOptions={validatePassword}
      />
    </SettingsForm>
  );
}

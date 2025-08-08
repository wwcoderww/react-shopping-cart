import { useForm } from "react-hook-form";
import apiChangePassword from "../../api/useChangePassword";
import SettingsDiv from "../accountInformation/SettingsDiv";
import SettingsInput from "../accountInformation/SettingsInput";
import SettingsLabel from "../accountInformation/SettingsLabel";

export default function ChangePassword() {
  const { register, getValues, handleSubmit } = useForm();

  function successFunction() {
    const notVerifiedPass = getValues().password;
    apiChangePassword(notVerifiedPass);
  }

  return (
    <SettingsDiv handleSubmit={handleSubmit(successFunction)}>
      <SettingsLabel dataName="password" message="Password" />
      <SettingsInput inputType="password" {...register("password")} />
      <label htmlFor="confirmPassword">Confirm</label>
      <SettingsInput inputType="confirmPassword" />
    </SettingsDiv>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import SettingsLabel from "./components/accountInformation/SettingsLabel";
import SettingsInput from "./components/accountInformation/SettingsInput";
import SettingsDiv from "./components/accountInformation/SettingsDiv";
import apiChangePassword from "./api/useChangePassword";

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

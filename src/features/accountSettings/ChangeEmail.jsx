import React from "react";
import { useForm } from "react-hook-form";
import changeEmail from "./api/useChangeEmail";
import SettingsDiv from "./components/accountInformation/SettingsDiv";
import SettingsInput from "./components/accountInformation/SettingsInput";
import SettingsLabel from "./components/accountInformation/SettingsLabel";

export default function ChangeEmail() {
  const { register, handleSubmit, getValues, reset } = useForm();

  async function handleForm() {
    const { newEmail, confirmEmail } = getValues();
    await changeEmail(newEmail, confirmEmail);
    reset();
  }
  return (
    <SettingsDiv handleSubmit={handleSubmit(handleForm)}>
      <SettingsLabel dataName="email" message="Email Address" />
      <SettingsInput
        inputType="email"
        defaultValue="email"
        {...register("newEmail")}
      />
      <label htmlFor="confirmEmail">Confirm</label>
      <SettingsInput inputType="email" {...register("confirmEmail")} />
    </SettingsDiv>
  );
}

import React from "react";
import SettingsBtnSet from "./components/SettingsBtnSet";
import SettingsLabel from "./components/SettingsLabel";
import SettingsInput from "./components/SettingsInput";
import SettingsDiv from "./components/SettingsDiv";
import { useForm } from "react-hook-form";

export default function ChangeName() {
  // Make into compound component
  const { register, handleSubmit, getValues } = useForm();

  function handleForm() {
    console.log(getValues());
  }

  return (
    <SettingsDiv handleSubmit={handleSubmit(handleForm)}>
      <SettingsLabel dataName="displayName" message="Display Name" />
      <SettingsInput inputType="text" {...register("displayName")} />
      <SettingsBtnSet />
    </SettingsDiv>
  );
}

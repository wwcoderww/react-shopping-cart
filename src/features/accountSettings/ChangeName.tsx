import { useForm } from "react-hook-form";
import changeName from "./api/useChangeName";
import SettingsDiv from "./components/accountInformation/SettingsDiv";
import SettingsInput from "./components/accountInformation/SettingsInput";
import SettingsLabel from "./components/accountInformation/SettingsLabel";

export default function ChangeName() {
  // Make into compound component
  const { register, handleSubmit, getValues, reset } = useForm();

  async function handleForm() {
    const newName = getValues().displayName;
    await changeName(newName);
    reset();
  }

  return (
    <SettingsDiv handleSubmit={handleSubmit(handleForm)}>
      <SettingsLabel dataName="displayName" message="Display Name" />
      <SettingsInput
        inputType="text"
        defaultValue="displayName"
        {...register("displayName")}
      />
    </SettingsDiv>
  );
}

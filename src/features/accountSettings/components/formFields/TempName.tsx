import SettingsForm from "../accountInformation/SettingsForm";
import SettingsInput from "../accountInformation/SettingsInput";
import SettingsLabel from "../accountInformation/SettingsLabel";

export default function TempChangeName() {
  function submitForm(data: any) {
    alert("WOW");
    console.log(data);
  }

  return (
    <SettingsForm onSubmit={submitForm}>
      <SettingsLabel dataName="displayName" message="Display Name" />
      <SettingsInput
        inputType="text"
        dataName="displayName"
        placeholder={true}
      />
    </SettingsForm>
  );
}

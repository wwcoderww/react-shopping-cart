import { getAuth } from "firebase/auth";
import { FormProvider, useForm, type FieldValues } from "react-hook-form";
import { type APIErrorType } from "../../../../types/ErrorType";
import SettingsBtnSet from "./SettingsBtnSet";

type SettingsFormType = {
  children: React.ReactNode;
  validateFunction(user: {}, data: FieldValues): Promise<APIErrorType | void>;
};

export default function SettingsForm({
  children,
  validateFunction,
}: SettingsFormType) {
  // Variables
  const methods = useForm();
  const { reset, setError } = methods;
  // Main/Last Function to be called
  async function finalForm(data: FieldValues) {
    // All firebase API calls need 'User'
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;
    // Call Child Prop Function
    const errorCheck = (await validateFunction(user, data)) || undefined;
    if (errorCheck) {
      // If validateFunction sends back error
      if (errorCheck.setError) {
        // If return message is set
        setError(...errorCheck.setError);
      } else {
        // If no return message is set
        alert(errorCheck.error.message);
        console.log(errorCheck);
      }
      return;
    }
    // If No Errors
    if (!errorCheck) {
      alert("Sucess");
      reset();
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(finalForm)}
        className="flex gap-4 p-2.5 text-xl"
      >
        {children}
        <SettingsBtnSet />
      </form>
    </FormProvider>
  );
}

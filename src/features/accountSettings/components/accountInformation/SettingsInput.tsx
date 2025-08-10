import SettingsError from "./SettingsError";
import { useFormContext } from "react-hook-form";
import { useAuth } from "../../../../contexts/AuthContext";
import { type User } from "firebase/auth";
// Prop Types
type SettingsInputType = {
  inputType: string;
  dataName: keyof User;
  placeholder?: boolean;
  formOptions?: {};
};

export default function SettingsInput({
  // Props
  inputType,
  placeholder,
  dataName,
  formOptions,
}: SettingsInputType) {
  // Variables
  const { register, formState } = useFormContext();
  const dataNameValidate = useAuth().currentUser?.[dataName];
  // TSX Verify - String for error message
  const verifyError = formState.errors?.[dataName]?.message;
  const error = typeof verifyError === "string" ? verifyError : undefined;
  // Verify User.'X'key exist
  const placeHolderValidated =
    placeholder && typeof dataNameValidate === "string"
      ? dataNameValidate
      : undefined;
  // Input Style. Seperated to include `` & errors
  const InputStyle = `bg-white outline-0 rounded-md px-1 h-8 ${
    error && `border-red-600 border-1 rounded-b-sm`
  }`;

  return (
    <div className="h-16">
      <input
        type={inputType}
        {...register(dataName, formOptions)}
        className={InputStyle}
        placeholder={placeHolderValidated}
        required
      />
      {error && <SettingsError error={error} />}
    </div>
  );
}

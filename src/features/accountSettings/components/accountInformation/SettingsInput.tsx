import { useFormContext } from "react-hook-form";
import { useAuth } from "../../../../contexts/AuthContext";
import SettingsError from "./SettingsError";
import type { User } from "firebase/auth";
// Prop Types
type SettingsInputType = {
  inputType: string;
  dataName: keyof User | string;
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
  let placeHolderValidated;
  if (placeholder) {
    const { currentUser } = useAuth();
    const dataNameValidate = (currentUser as any)?.[dataName];
    // Verify User.'X'key exist
    placeHolderValidated =
      placeholder && typeof dataNameValidate === "string"
        ? dataNameValidate
        : undefined;
  }
  // TSX Verify - String for error message
  const verifyError = formState.errors?.[dataName]?.message;
  const error = typeof verifyError === "string" ? verifyError : undefined;
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

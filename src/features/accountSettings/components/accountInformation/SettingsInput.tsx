import { useFormContext } from "react-hook-form";
import { useAuth } from "../../../../contexts/AuthContext";
import { type User } from "firebase/auth";

type SettingsInputType = {
  inputType: string;
  dataName: keyof User;
  placeholder?: boolean;
};

export default function SettingsInput({
  inputType,
  placeholder,
  dataName,
}: SettingsInputType) {
  const { register } = useFormContext();
  const dataNameValidate = useAuth().currentUser?.[dataName];
  const placeHolderValidated =
    placeholder && typeof dataNameValidate === "string"
      ? dataNameValidate
      : undefined;

  return (
    <input
      type={inputType}
      {...register(dataName)}
      className="bg-white outline-0 rounded-md px-1"
      placeholder={placeHolderValidated}
      required
    />
  );
}

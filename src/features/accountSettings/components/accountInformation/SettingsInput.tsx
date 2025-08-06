import { useAuth } from "../../../../contexts/AuthContext";

type SettingsInputType = {
  inputType: string;
  defaultValue?: string;
};

export default function SettingsInput({
  inputType,
  defaultValue,
  ...register
}: SettingsInputType) {
  const currentUser = useAuth().currentUser || null;

  return (
    <input
      type={inputType}
      {...register}
      className="bg-white outline-0 rounded-md px-1"
      defaultValue={
        currentUser ? (defaultValue as keyof typeof currentUser) : ""
      }
      required
    />
  );
}

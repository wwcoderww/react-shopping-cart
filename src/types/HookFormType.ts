import type { FieldValues, UseFormRegister } from "react-hook-form";

type HookFormType = {
  register: UseFormRegister<FieldValues>;
};

type AccountSettingsDataType = {
  displayName?: string;
  password?: string;
  verifyPassword?: string;
};

export { type HookFormType, type AccountSettingsDataType };

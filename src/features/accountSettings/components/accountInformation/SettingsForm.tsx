import { FormProvider, useForm } from "react-hook-form";
import SettingsBtnSet from "./SettingsBtnSet";

type SettingsFormType = {
  children: React.ReactNode;
  onSubmit(data: any): void;
};

export default function SettingsForm({ children, onSubmit }: SettingsFormType) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex gap-4 p-2.5 text-xl"
      >
        {children}
        <SettingsBtnSet />
      </form>
    </FormProvider>
  );
}

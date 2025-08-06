type SettingsLabelType = {
  dataName: string;
  message: string;
};

export default function SettingsLabel({
  dataName,
  message,
}: SettingsLabelType) {
  return (
    <div className="flex-1 font-[500] text-3xl">
      <label htmlFor={dataName}>{message}</label>
    </div>
  );
}

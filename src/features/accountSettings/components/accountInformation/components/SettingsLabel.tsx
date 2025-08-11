type SettingsLabelType = {
  dataName: string;
  message: string;
  verify?: boolean;
};

export default function SettingsLabel({
  dataName,
  message,
  verify,
}: SettingsLabelType) {
  const ContainerStyle = `flex-${verify ? 0 : 1} font-[500] text-3xl `;
  return (
    <div className={ContainerStyle}>
      <label htmlFor={dataName}>{message}</label>
    </div>
  );
}

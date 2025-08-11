type SettingsError = {
  error: string | undefined;
};

export default function SettingsError({ error }: SettingsError) {
  return (
    <div className="border-r-2 border-l-2 border-b-2 border-red-600 text-red-700 rounded-sm rounded-t-none bg-red-300 px-1">
      <p>{error}</p>
    </div>
  );
}

import SettingsNavLink from "./SettingsNavLink";

type SettingsNavType = {
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  openTab: string;
};

export default function SettingsNav({ setOpenTab, openTab }: SettingsNavType) {
  return (
    <div className="flex flex-col text-2xl border-r-1">
      <SettingsNavLink
        setOpenTab={setOpenTab}
        openTab={openTab}
        tabName={"info"}
        label="Account Information"
      />
      <SettingsNavLink
        setOpenTab={setOpenTab}
        openTab={openTab}
        tabName={"signout"}
        label="Sign Out"
      />
    </div>
  );
}

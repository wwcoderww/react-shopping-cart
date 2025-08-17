import { useDropDownMenu } from "../../../contexts/DropDownMenuContext";

type SearchOptionType = {
  item: string;
  defaultValue?: boolean;
};

export default function DropDownMenuOption({
  item,
  defaultValue,
}: SearchOptionType) {
  const { handleFunction, setIsOpen, curActive, setCurActive } =
    useDropDownMenu();
  const valueName = defaultValue ? "" : item.replace(/[^a-zA-Z0-9]/g, "");

  function finalFunction() {
    setIsOpen(false);
    setCurActive(valueName);
    handleFunction(valueName);
  }

  const styleClass = `z-10 hover:bg-blue-400 hover:cursor-pointer ${
    curActive === valueName && `bg-blue-300`
  }`;

  return (
    <option value={valueName} className={styleClass} onClick={finalFunction}>
      {item}
    </option>
  );
}

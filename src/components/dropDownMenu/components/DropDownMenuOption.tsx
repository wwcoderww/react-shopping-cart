import { useDropDownMenu } from "../../../contexts/DropDownMenuContext";

type SearchOptionType = {
  item: string;
  defaultValue?: boolean;
};

export default function DropDownMenuOption({
  item,
  defaultValue,
}: SearchOptionType) {
  const { handleFunction, setIsOpen } = useDropDownMenu();
  const valueName = defaultValue ? "" : item.replace(/[^a-zA-Z0-9]/g, "");

  function finalFunction() {
    setIsOpen(false);
    handleFunction(valueName);
  }

  return (
    <option
      value={valueName}
      className="z-10 hover:bg-blue-400 hover:cursor-pointer"
      onClick={finalFunction}
    >
      {item}
    </option>
  );
}

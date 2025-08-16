import { useDropDownMenu } from "../../../contexts/DropDownMenuContext";
import DropDownMenuOption from "./DropDownMenuOption";

export default function DropDownMenuDropDown() {
  const { isOpen, options } = useDropDownMenu();

  if (!isOpen) return;

  return (
    <div className="absolute bg-gray-100 rounded-sm mt-0.5 p-1">
      <DropDownMenuOption item="All" defaultValue={true} />
      {options.map((item) => (
        <DropDownMenuOption item={item} key={item} />
      ))}
    </div>
  );
}

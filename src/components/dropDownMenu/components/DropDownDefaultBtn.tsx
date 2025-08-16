import { useDropDownMenu } from "../../../contexts/DropDownMenuContext";

export default function DropDownMenuDefaultBtn() {
  const { setIsOpen } = useDropDownMenu();

  return (
    <button
      onClick={() => setIsOpen((cur) => !cur)}
      className="bg-gray-300 w-15 rounded-lg hover:cursor-pointer"
    >
      Filter
    </button>
  );
}

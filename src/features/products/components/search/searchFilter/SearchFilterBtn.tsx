import { useFilter } from "../../../contexts/FilterContext";

export default function SearchFilterBtn() {
  const { setIsOpen } = useFilter();

  return (
    <button
      onClick={() => setIsOpen((cur) => !cur)}
      className="bg-gray-300 w-15 rounded-lg hover:cursor-pointer"
    >
      Filter
    </button>
  );
}

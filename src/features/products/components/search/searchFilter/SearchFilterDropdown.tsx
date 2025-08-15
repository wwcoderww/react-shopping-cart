import { useFilter } from "../../../contexts/FilterContext";
import { useSearch } from "../../../contexts/SearchContext";
import SearchOption from "./SearchOption";

export default function SearchFilterDropdown() {
  const { itemCatagories } = useSearch();
  const { isOpen } = useFilter();

  if (!isOpen) return;

  return (
    <div className="absolute bg-gray-100 rounded-sm mt-1 p-1">
      <SearchOption title={"All Items"} defaultValue={true} />
      {itemCatagories.map((item) => (
        <SearchOption title={item} key={item} />
      ))}
    </div>
  );
}

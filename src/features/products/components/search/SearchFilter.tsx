import { useSearch } from "../../../../contexts/SearchContext";
import SearchOption from "./SearchOption";

export default function SearchFilter() {
  const { updateSearch, itemCatagories } = useSearch();

  return (
    <select
      onChange={(e) => updateSearch(undefined, e.target.value)}
      name="filter"
      id="searchFilter"
      className="text-center w-34"
    >
      <option value="">All Items</option>
      {itemCatagories.map((item) => (
        <SearchOption title={item} key={item} />
      ))}
    </select>
  );
}

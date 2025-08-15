import { FcSearch } from "react-icons/fc";
import { useSearch } from "../../contexts/SearchContext";

export function SearchBar() {
  const { updateSearch } = useSearch();
  return (
    <div className="bg-blue-100 mt-4 rounded-lg flex items-center flex-1">
      <FcSearch className="mr-1 ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="p-2 flex-1 outline-0 "
        onChange={(e) => updateSearch(e.target.value, undefined)}
      />
    </div>
  );
}

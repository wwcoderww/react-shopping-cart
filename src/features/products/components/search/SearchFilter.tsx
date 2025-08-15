import { FilterProvider } from "../../contexts/FilterContext";
import SearchFilterBtn from "./searchFilter/SearchFilterBtn";
import SearchFilterDropdown from "./searchFilter/SearchFilterDropdown";

export default function SearchFilter() {
  return (
    <FilterProvider>
      <div>
        <SearchFilterBtn />
        <SearchFilterDropdown />
      </div>
    </FilterProvider>
  );
}

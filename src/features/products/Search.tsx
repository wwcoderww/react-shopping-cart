import SearchFilter from "./components/search/SearchFilter";
import { SearchBar } from "./SearchBar";

export default function Search() {
  return (
    <div className="flex m-auto min-w-6/12 items-baseline gap-2">
      <div className="w-15"></div>
      <SearchBar />
      <SearchFilter />
    </div>
  );
}

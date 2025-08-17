import SearchFilter from "./components/search/SearchFilter";
import { SearchBar } from "./components/search/SearchBar";

export default function Search() {
  return (
    <div className="flex m-auto min-w-6/12 sm:items-baseline gap-2 flex-col items-center sm:flex-row">
      <SearchBar />
      <SearchFilter />
    </div>
  );
}

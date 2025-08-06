import { FcSearch } from "react-icons/fc";

type SearchBarType = {
  setSearch(value: string): void;
};

export function SearchBar({ setSearch }: SearchBarType) {
  return (
    <div className="bg-blue-100 mx-auto mt-4 rounded-lg flex items-center w-6/12">
      <FcSearch className="mr-1 ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="p-2 flex-1 outline-0 "
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

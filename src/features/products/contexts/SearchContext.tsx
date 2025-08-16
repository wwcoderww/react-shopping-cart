import { useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProductItemType } from "../../../types/ProductItemType";
import newFilter from "./search/newFilter";
import newSearch from "./search/newSearch";

interface SearchContextType {
  curSearchItems: ProductItemType[];
  itemCatagories: string[];
  updateSearch(search: string): void;
  updateFilter(filter: string): void;
}

const SearchContext = createContext<SearchContextType | null>(null);

function SearchProvider({ children }: { children: ReactNode }) {
  // API HANDLING
  const queryClient = useQueryClient();
  const [, allItems = []] = queryClient.getQueriesData<ProductItemType[]>({
    queryKey: ["allItems"],
  })[0];
  const [...itemCatagories] = new Set(allItems.map((item) => item.category));
  // States
  const [curSearch, setCurSearch] = useState<string>("");
  const [filteredItems, setFilteredItems] =
    useState<ProductItemType[]>(allItems);
  const [curSearchItems, setCurSearchItems] =
    useState<ProductItemType[]>(filteredItems);
  //   Get all items and catagory from database

  function updateSearch(search: string) {
    setCurSearch(search);
    setCurSearchItems(newSearch(filteredItems, search));
  }

  function updateFilter(filter: string) {
    const updatedFilter = newFilter(allItems, filter);
    setFilteredItems(updatedFilter);
    setCurSearchItems(newSearch(updatedFilter, curSearch));
  }

  return (
    <SearchContext.Provider
      value={{
        updateSearch,
        curSearchItems,
        itemCatagories,
        updateFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === null)
    throw new Error("Using Search Context outside provider");
  return context;
}

export { SearchProvider, useSearch };

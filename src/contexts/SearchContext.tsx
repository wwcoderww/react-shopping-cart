import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ProductItemType } from "../types/ProductItemType";
import { useQueryClient } from "@tanstack/react-query";
import filterResults from "./search/filterSearch";

interface SearchContextType {
  curSearch: ProductItemType[];
  itemCatagories: string[];
  updateSearch(search: string | undefined, filter: string | undefined): void;
}

// Set catagories based off allItems. Use useState incase catagory list changes from api/db

const SearchContext = createContext<SearchContextType | null>(null);

function SearchProvider({ children }: { children: ReactNode }) {
  // States
  const [curSearch, setCurSearch] = useState<ProductItemType[]>([]);
  const [itemCatagories, setItemCatagories] = useState<string[]>([]);
  //   Get all items and catagory from database
  const queryClient = useQueryClient();
  const [, allItems = []] = queryClient.getQueriesData<ProductItemType[]>({
    queryKey: ["allItems"],
  })[0];

  function updateSearch(
    search: string | undefined,
    filter: string | undefined
  ) {
    setCurSearch(filterResults(allItems, search, filter));
  }
  useEffect(() => {
    // Catagory Options
    const allCatagories = new Set(allItems.flatMap((item) => item.category));
    setItemCatagories([...allCatagories]);
    setCurSearch(allItems);
  }, [allItems]);

  return (
    <SearchContext.Provider value={{ updateSearch, curSearch, itemCatagories }}>
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

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ProductItemType } from "../../../types/ProductItemType";
import { useQueryClient } from "@tanstack/react-query";
import filterResults from "./search/filterSearch";

interface SearchContextType {
  curSearch: ProductItemType[];
  itemCatagories: string[];
  updateSearch(search: string | undefined, filter: string | undefined): void;
}

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
  // Filter Displayed Items by search || catagory
  function updateSearch(
    search: string | undefined,
    filter: string | undefined
  ) {
    setCurSearch(filterResults(allItems, search, filter));
  }
  // On Mount
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

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { useSearch } from "./SearchContext";

type FilterContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleClick(value: string): void;
};

const FilterContext = createContext<FilterContextType | null>(null);

function FilterProvider({ children }: { children: ReactNode }) {
  const { updateSearch } = useSearch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick(value: string) {
    setIsOpen(false);
    updateSearch(undefined, value);
  }
  return (
    <FilterContext.Provider value={{ isOpen, handleClick, setIsOpen }}>
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);
  if (context === null)
    throw new Error("Using Filter Context outside provider");
  return context;
}

export { FilterProvider, useFilter };

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
// All imported values
type DropDownMenuProviderType = {
  options: string[];
  handleFunction(value: string): void;
  children: ReactNode;
};
// All exported values
type DropDownMenuType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  options: string[];
  handleFunction(value: string): void;
};

const DropDownMenuContext = createContext<DropDownMenuType | null>(null);

function DropDownMenuProvider({
  options,
  handleFunction,
  children,
}: DropDownMenuProviderType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropDownMenuContext.Provider
      value={{ isOpen, setIsOpen, handleFunction, options }}
    >
      {children}
    </DropDownMenuContext.Provider>
  );
}

function useDropDownMenu() {
  const context = useContext(DropDownMenuContext);
  if (context === null)
    throw new Error("Using Filter Context outside provider");
  return context;
}

export { DropDownMenuProvider, useDropDownMenu };

import { DropDownMenuProvider } from "../../contexts/DropDownMenuContext";
import DropDownMenuDefaultBtn from "./components/DropDownDefaultBtn";
import DropDownMenuDropDown from "./components/DropDownMenuDropDown";

type DropDownMenuType = {
  options: string[];
  handleFunction(value: string): void;
};

export default function DropDownMenu({
  options,
  handleFunction,
}: DropDownMenuType) {
  return (
    <DropDownMenuProvider options={options} handleFunction={handleFunction}>
      <div>
        <DropDownMenuDefaultBtn />
        <DropDownMenuDropDown />
      </div>
    </DropDownMenuProvider>
  );
}

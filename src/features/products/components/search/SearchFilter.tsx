import DropDownMenu from "../../../../components/dropDownMenu/DropDownMenu";
import { useSearch } from "../../contexts/SearchContext";
// Make reusable drop down. Need btn name, function(value), [dataName, displayName][]
export default function SearchFilter() {
  const { updateFilter, itemCatagories } = useSearch();

  return (
    <DropDownMenu handleFunction={updateFilter} options={itemCatagories} />
  );
}

import { useFilter } from "../../../contexts/FilterContext";

type SearchOptionType = {
  title: string;
  defaultValue?: boolean;
};

export default function SearchOption({
  title,
  defaultValue,
}: SearchOptionType) {
  const { handleClick } = useFilter();
  // Delete spaces / special characters for value field
  const optionValue = defaultValue ? "" : title.replace(/[^a-zA-Z]/g, "");

  return (
    <option
      value={optionValue}
      className="z-10 hover:bg-blue-400 hover:cursor-pointer"
      onClick={() => handleClick(optionValue)}
    >
      {title}
    </option>
  );
}

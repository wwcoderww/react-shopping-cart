type SearchOptionType = {
  title: string;
};

export default function SearchOption({ title }: SearchOptionType) {
  const optionValue = title.replace(/[^a-zA-Z]/g, "");
  return <option value={optionValue}>{title}</option>;
}

import type { ProductItemType } from "../../types/ProductItemType";
import Item from "./Item";

type ProductListType = {
  data: [];
  search: string;
};

export default function ProductList({ data, search }: ProductListType) {
  const searchResults = data.filter((item: ProductItemType) => {
    const newItem = item.title.toLowerCase();
    const newSearch = search.toLowerCase();
    return newItem.includes(newSearch);
  });
  console.log(searchResults);
  const activeShowing = search ? searchResults : data;

  return (
    <ul className="flex flex-wrap justify-center gap-5 py-6">
      {activeShowing.map((item: ProductItemType) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

import { useSearch } from "./contexts/SearchContext";
import type { ProductItemType } from "../../types/ProductItemType";
import Item from "./Item";

export default function ProductList() {
  const { curSearchItems } = useSearch();
  return (
    <ul className="flex flex-wrap justify-center gap-5 py-6">
      {curSearchItems.map((item: ProductItemType) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

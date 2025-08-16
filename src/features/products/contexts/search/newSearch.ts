import type { ProductItemType } from "../../../../types/ProductItemType";

export default function newSearch(
  filteredItems: ProductItemType[],
  search: string
): ProductItemType[] {
  return filteredItems.filter((item: ProductItemType) => {
    const newItem = item.title.toLowerCase();
    const newSearch = search.toLowerCase();
    return newItem.includes(newSearch);
  });
}

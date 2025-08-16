import type { ProductItemType } from "../../../../types/ProductItemType";

export default function newFilter(
  allItems: ProductItemType[],
  filter: string
): ProductItemType[] {
  if (!filter) return allItems;

  return allItems.filter(
    (item: ProductItemType) =>
      item.category.replace(/[^a-zA-Z]/g, "") === filter
  );
}

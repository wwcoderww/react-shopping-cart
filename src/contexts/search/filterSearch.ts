import type { ProductItemType } from "../../types/ProductItemType";

export default function filterResults(
  currentSearch: ProductItemType[],
  search?: string,
  filter?: string
): ProductItemType[] {
  // Variables
  let returnData = currentSearch;
  // Check for Filter
  if (filter) {
    returnData = returnData.filter(
      (item: ProductItemType) =>
        item.category.replace(/[^a-zA-Z]/g, "") === filter
    );
  }
  // Check for Search
  if (search) {
    returnData = returnData.filter((item: ProductItemType) => {
      const newItem = item.title.toLowerCase();
      const newSearch = search.toLowerCase();
      return newItem.includes(newSearch);
    });
  }
  // Finally
  return returnData;
}

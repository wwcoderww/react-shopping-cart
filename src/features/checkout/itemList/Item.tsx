import type { ProductItemType } from "../../../types/ProductItemType";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";
import ItemInput from "./ItemInput";

type ItemType = {
  item: ProductItemType;
  index: number;
  updateCart(item: ProductItemType, quantity: number): void;
};

export default function Item({ item, updateCart, index }: ItemType) {
  const liStyle = `flex h-56 ${index !== 0 && "border-t-3"}`;
  return (
    <li className={liStyle}>
      <ItemImage image={item.image} />
      <ItemInfo item={item} />
      <ItemInput item={item} updateCart={updateCart} />
    </li>
  );
}

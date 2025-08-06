import type { ProductItemType } from "../../types/ProductItemType";
import Item from "./itemList/Item";

type ItemListType = {
  cart: ProductItemType[];
  updateCart(item: ProductItemType, quantity: number): void;
};

export default function ItemList({ cart, updateCart }: ItemListType) {
  return (
    <ul className="border-4  rounded-md bg-white">
      {cart?.map((item: ProductItemType, index: number) => (
        <Item item={item} key={item.id} updateCart={updateCart} index={index} />
      ))}
    </ul>
  );
}

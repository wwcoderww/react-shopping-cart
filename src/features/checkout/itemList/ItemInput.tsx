import { FaMinus, FaPlus } from "react-icons/fa";
import type { ProductItemType } from "../../../types/ProductItemType";

type ItemInputType = {
  item: ProductItemType;
  updateCart(item: ProductItemType, amount: number): void;
};

export default function ItemInput({ item, updateCart }: ItemInputType) {
  return (
    <div className="flex flex-col justify-center gap-2 text-center text-3xl px-3 w-20 items-center">
      <FaPlus onClick={() => updateCart(item, 1)} className=" text-blue-600" />
      <div className="text-4xl text-blue-800 font-bold">{item.quantity}</div>
      <FaMinus
        onClick={() => updateCart(item, -1)}
        className=" text-blue-600"
      />
    </div>
  );
}

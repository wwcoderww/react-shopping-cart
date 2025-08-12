import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import type { ProductItemType } from "../types/ProductItemType";

type BtnAddDelType = {
  item: ProductItemType;
  style?: string;
};

export default function BtnAddDel({ item, style }: BtnAddDelType) {
  const { cart, updateCart } = useCart();
  const cartItem: ProductItemType | undefined = cart.find(
    (cartItem: ProductItemType) => cartItem.title === item.title
  );

  const ContainerStyle = `flex flex-col justify-center gap-2 text-center text-6xl px-3 ${style}`;

  return (
    <div className={ContainerStyle}>
      <FaPlus
        onClick={() => updateCart(cartItem || item, 1)}
        className=" text-blue-600 hover:cursor-pointer"
      />
      {cartItem && (
        <>
          <div className="text-4xl text-blue-800 font-bold">
            {cartItem.quantity}
          </div>
          <FaMinus
            onClick={() => updateCart(cartItem || item, -1)}
            className=" text-blue-600 hover:cursor-pointer"
          />
        </>
      )}
    </div>
  );
}

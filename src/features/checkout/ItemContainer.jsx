import React from "react";
import { useCart } from "../../hooks/CartContext";
import Item from "./Item";

export default function ItemContainer() {
  const { cart, updateCart } = useCart();
  const emptyCart = cart.length === 0;

  return (
    <>
      {emptyCart ? (
        <div className="w-full h-full justify-center flex items-center text-4xl">
          Add Items To Cart!
        </div>
      ) : (
        <ul className="py-20">
          {cart?.map((item) => (
            <Item item={item} key={item.id} updateCart={updateCart} />
          ))}
        </ul>
      )}
    </>
  );
}
